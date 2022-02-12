import AboutSection from './components/organisms/AboutSection/AboutSection.component';
import Header from './components/organisms/Header/Header.component';
import HomeSection from './components/organisms/HomeSection/HomeSection.component';
import ProjectSection from './components/organisms/ProjectSection/ProjectSection.component';
import SkillsSection from './components/organisms/SkillsSection/SkillsSection.component';
import Footer from './components/organisms/Footer/Footer.component';
import ScrollUp from './components/atoms/ScrollUp/ScrollUp.component';

function App() {
	return (
		<div className='App'>
			<Header />
			<HomeSection />
			<AboutSection />
			<SkillsSection />
			<ProjectSection />
			<Footer />
			<ScrollUp />
		</div>
	);
}

export default App;
