import Card from "./components/card/Card";
import Cards from "./components/cards/Cards";
import Header from "./components/header/Header";
import ImageCard from "./components/image-card/ImageCard";
import Information from "./components/information/Information";
import Subtitle from "./components/subtitle/Subtitle";
import Title from "./components/title/Title";
import TitleCard from "./components/titlecard/TitleCard";

const App = () => {
	return (
		<>
			<Header>
				<Subtitle text='Reliable, efficient delivery' />
				<Title text='Powered by Technology' />
				<Information text='Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful' />
			</Header>
			<Cards>
				<Card>
					<TitleCard text = 'Team Builder'/>
					<Information text = 'Scans our talent network to create the optimal team for your project'/>
					<ImageCard src= './public/assets/images/icon-team-builder.svg'/>
				</Card>
				<Card>
					<TitleCard text = 'Supervisor'/>
					<Information text = 'Monitors activity to identify project roadblocks'/>
					<ImageCard src= './public/assets/images/icon-supervisor.svg'/>
				</Card>
				<Card>
					<TitleCard text = 'Calculator'/>
					<Information text = 'Uses data from past projects to provide better delivery estimates'/>
					<ImageCard src= './public/assets/images/icon-calculator.svg'/>
				</Card>
				<Card>
					<TitleCard text = 'Karma'/>
					<Information text = 'Regularly evaluates our talent to ensure quality'/>
					<ImageCard src= './public/assets/images/icon-karma.svg'/>
				</Card>
			</Cards>
		</>
	)
};

export default App;
