import Header from "./components/header/Header";
import Information from "./components/information/Information";
import Title from "./components/title/Title";

const App = () => {
	return <Header>
		<Title text='Reliable, efficient delivery' />
		<Title text='Powered by Technology' />
		<Information text='Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful' />
	</Header>
};

export default App;
