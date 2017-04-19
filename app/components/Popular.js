var React = require('react');
var PropTypes = require('prop-types');

// Stateless Functional Component
function SelectLanguage(props) {
	var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

	return (
		<ul className='languages'>
			{languages.map(function(lang) {
				return (
					<li
						style={lang === props.selectedLanguage ? { color: '#d0021b' } : null }
						key={lang}
						onClick={props.onSelect.bind(null, lang)}>{lang}</li>
				)
			})}
		</ul>
	)
}

SelectLanguage.propTypes = {
	selectedLanguage: PropTypes.string.isRequired,
	onSelect: PropTypes.func.isRequired
}

class Popular extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedLanguage: 'All'
		}

		this.updateLanguage = this.updateLanguage.bind(this);
	}

	updateLanguage(language) {
		console.log(language);
		this.setState(function() {
			return {
				selectedLanguage: language
			}
		})
	}

	render() {
		return (
			<div>
				<SelectLanguage
					selectedLanguage={this.state.selectedLanguage}
					onSelect={this.updateLanguage} />
			</div>
		)
	}
}

module.exports = Popular;
