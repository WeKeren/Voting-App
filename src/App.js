import React,{Component} from 'react';
import './App.css';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			languages : [
				{name: "Keren Weisberg", votes: 0},
				{name: "Different Contestant", votes: 0},
			]
		}
	}

	vote (i) {
		let newLanguages = [...this.state.languages];
		newLanguages[i].votes++;
	
		this.setState({languages: newLanguages});
		
	}

	render(){
		return(
			<>
<h1>Vote Your Candidate for Cloud Portal Devops Operations (Student)</h1>
<div className="Contender">
					{
						this.state.languages.map((lang, i) => 
		<div key={i} className="Contender">
		<div className="voteCount">
									{lang.votes}
								</div>
<div className="Contender">
								{lang.name}
								</div>
								<button onClick={this.vote.bind(this, i)}>Click Here</button>
	</div>
	)}
	</div>
        </>
	);
	}
}
export default App;