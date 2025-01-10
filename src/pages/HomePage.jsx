import { useState } from "react";
import WelcomeScreen from "../components/WelcomeScreen";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import FeedbackSection from "../components/feedbackSection";
import Footer from "../components/Footer";
import BookDisplay from "../components/BookDisplay";

export default function Homepage() {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleWelcomeFinish = () => {
    setShowWelcome(false);
  };

  return (
    <>
      {showWelcome ? (
        <WelcomeScreen onFinish={handleWelcomeFinish} />
      ) : (
        <main className=" bg-custom-blue">
          <Navbar />
          <Header />
          <BookDisplay />
          <FeedbackSection />
          <Footer />
        </main>
      )}
    </>
  );
}
