import AboutSection from './components/organisms/AboutSection/AboutSection.component';
import Header from './components/organisms/Header/Header.component';
import HomeSection from './components/organisms/HomeSection/HomeSection.component';
import ProjectSection from './components/organisms/ProjectSection/ProjectSection.component';
import SkillsSection from './components/organisms/SkillsSection/SkillsSection.component';

function App() {
	return (
		<div className='App'>
			<Header />
			<HomeSection />
			<AboutSection />
			<SkillsSection />
			<ProjectSection />
		</div>
	);
}

export default App;
