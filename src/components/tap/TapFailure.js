import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

import TapLineItem from 'components/tap/TapLineItem'

const styles = {
	container: {
		backgroundColor: 'pink',
	},

	content: {
		padding: '0 1em 1em',
	},

	failureContainer: {
		display: 'table',
	},

	failureDescription: {
		display: 'table-cell',
	},

	failureGroup: {
		display: 'table-row',
	},

	failureName: {
		display: 'table-cell',
		paddingRight: '1em',
		fontWeight: 'bold',
	},

	stackTrace: {
		margin: 0,
		padding: 0,
		lineHeight: '1.5em',
		overflowX: 'auto',
	},

	testType: {
		margin: 0,
	},
}

export const TapFailure = ({
	actual,
	expected,
	failedTest,
	operator,
	stack,
}) => (
	<div style={styles.container}>
		<TapLineItem {...failedTest} />

		<div style={styles.content}>
			<h3 style={styles.testType}>{operator}</h3>

			{
				stack
				&& (
					<p style={styles.failureGroup}>
						<span style={styles.failureDescription}>{stack}</span>
					</p>
				)
			}

			{
				!stack
				&& (
					<div style={styles.failureContainer}>
						<p style={styles.failureGroup}>
							<span style={styles.failureName}>Expected</span>
							<span style={styles.failureDescription}>{expected}</span>
						</p>
						<p style={styles.failureGroup}>
							<span style={styles.failureName}>Actual</span>
							<span style={styles.failureDescription}>{actual}</span>
						</p>
					</div>
				)
			}
		</div>
	</div>
)

TapFailure.propTypes = {
	actual: PropTypes.string,
	expected: PropTypes.string,
	failedTest: PropTypes.shape({
		testNumber: PropTypes.number.isRequired,
		text: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
	}).isRequired,
	id: PropTypes.number.isRequired,
	operator: PropTypes.string.isRequired,
	stack: PropTypes.string,
}

const mapStateToProps = (_, initialProps) => (
	({ tap: { failures } }) => ({
		...(failures[initialProps.id] || {})
	})
)

export default connect(mapStateToProps)(TapFailure)
