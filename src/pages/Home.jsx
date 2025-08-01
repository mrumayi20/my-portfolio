import { StarBackground } from "../components/StarBackground"
import { Navbar } from "../components/Navbar"
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection"
import { SkillsSection } from "../components/SkillsSection"
import { ProjectsSection } from "../components/ProjectsSection"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/Footer"

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        <StarBackground></StarBackground>
        <Navbar></Navbar>
        <main>
            <HeroSection></HeroSection>
            <AboutSection></AboutSection>
            <SkillsSection></SkillsSection>
            <ProjectsSection></ProjectsSection>
            <ContactSection></ContactSection>
        </main>
        <Footer></Footer>

    </div>
}