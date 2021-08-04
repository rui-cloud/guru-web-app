import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import MoneyTipsFeature3 from "./components/MoneyTipsFeature3";
import Frame1 from "./components/Frame1";
import MainLandingPageHero from "./components/MainLandingPageHero";
import MoneyTipsFeature2 from "./components/MoneyTipsFeature2";
import SignUp from "./components/SignUp";
import Temp2 from "./components/Temp2";
import Temp1 from "./components/Temp1";
import Q1Form from "./components/Q1Form";
import Q2Form from "./components/Q2Form";
import Q3Form from "./components/Q3Form";
import Q4Form from "./components/Q4Form";
import QuizQ3 from "./components/QuizQ3";
import Q5Form from "./components/Q5Form";
import Q6Form from "./components/Q6Form";
import Q7Form from "./components/Q7Form";
import LogIn from "./components/LogIn";
import MoneyTipsFeature1 from "./components/MoneyTipsFeature1";
import QuizLandingPage from "./components/QuizLandingPage";
import DealsFeature from "./components/DealsFeature";
import Temp3 from "./components/Temp3";
import About from "./components/About";
import Settings from "./components/Settings";
import QuizQ2 from "./components/QuizQ2";
import X1 from "./components/X1";
import XGuidance from "./components/XGuidance";
import SideBarMenu from "./components/SideBarMenu";
import X2 from "./components/X2";
import AddExtraIncomeOrExpense from "./components/AddExtraIncomeOrExpense";
import AEIOE from "./components/AEIOE";
import Profile from "./components/Profile";
import JobsFeature from "./components/JobsFeature";
import QuizQ1 from "./components/QuizQ1";
import StudentDeals from "./components/StudentDeals";
import QuizQ4 from "./components/QuizQ4";
import QuizQ5 from "./components/QuizQ5";
import QuizQ6 from "./components/QuizQ6";
import QuizQ7 from "./components/QuizQ7";
import QuizQ8 from "./components/QuizQ8";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/moneytips-feature3">
          <MoneyTipsFeature3 {...moneyTipsFeature3Data} />
        </Route>
        <Route path="/frame-1">
          <Frame1 />
        </Route>
        <Route path="/:path(|main-landing-page-hero)">
          <MainLandingPageHero {...mainLandingPageHeroData} />
        </Route>
        <Route path="/moneytips-feature2">
          <MoneyTipsFeature2 {...moneyTipsFeature2Data} />
        </Route>
        <Route path="/sign-up">
          <SignUp {...signUpData} />
        </Route>
        <Route path="/temp-2">
          <Temp2 src="/img/img-9872-3-4@2x.png" />
        </Route>
        <Route path="/temp-1">
          <Temp1
            img_98722="/img/img-9872-3-4@2x.png"
            widgetMSizeBigLinesChartWithDynamicProps={temp1Data.widgetMSizeBigLinesChartWithDynamicProps}
          />
        </Route>
        <Route path="/q1-form">
          <Q1Form icon="/img/icon@2x.svg" img_98723="/img/img-9872-3@2x.png" />
        </Route>
        <Route path="/q2-form">
          <Q2Form icon="/img/icon@2x.svg" img_98723="/img/img-9872-3@2x.png" lalala="lalalalalalalal" />
        </Route>
        <Route path="/q3-form">
          <Q3Form
            icon="/img/icon@2x.svg"
            img_98723="/img/img-9872-3@2x.png"
            asskkdkkdkdkdkdkdk="lalalalalalalalalalalalal"
          />
        </Route>
        <Route path="/q4-form">
          <Q4Form
            icon="/img/icon@2x.svg"
            img_98723="/img/img-9872-3@2x.png"
            asskkdkkdkdkdkdkdk="lalalalallaalallallall  lalalalalalalalalalalllalallal"
          />
        </Route>
        <Route path="/quiz-q3">
          <QuizQ3 {...quizQ3Data} />
        </Route>
        <Route path="/q5-form">
          <Q5Form
            icon="/img/icon@2x.svg"
            img_98723="/img/img-9872-3@2x.png"
            asskkdkkdkdkdkdkdk="lalalalallaalallallall  lalalalalalalalalalalllalallal"
          />
        </Route>
        <Route path="/q6-form">
          <Q6Form
            icon="/img/icon@2x.svg"
            img_98723="/img/img-9872-3@2x.png"
            asskkdkkdkdkdkdkdk="lalalalallaalallallall  lalalalalalalalalalalllalallal"
          />
        </Route>
        <Route path="/q7-form">
          <Q7Form
            icon="/img/icon@2x.svg"
            img_98723="/img/img-9872-3@2x.png"
            asskkdkkdkdkdkdkdk="lalalalallaalallallall  lalalalalalalalalalalllalallal"
          />
        </Route>
        <Route path="/log-in">
          <LogIn {...logInData} />
        </Route>
        <Route path="/moneytips-feature1">
          <MoneyTipsFeature1 {...moneyTipsFeature1Data} />
        </Route>
        <Route path="/quiz-landing-page">
          <QuizLandingPage {...quizLandingPageData} />
        </Route>
        <Route path="/deals-feature">
          <DealsFeature {...dealsFeatureData} />
        </Route>
        <Route path="/temp-3">
          <Temp3 src="/img/img-9872-3-4@2x.png" />
        </Route>
        <Route path="/about">
          <About src="/img/img-9872-3@2x.png" />
        </Route>
        <Route path="/settings">
          <Settings icon="/img/img-9872-3-4@2x.png" img_98723="/img/img-9872-3-4@2x.png" />
        </Route>
        <Route path="/quiz-q2">
          <QuizQ2 {...quizQ2Data} />
        </Route>
        <Route path="/x-1">
          <X1
            text37={
              <>
                Assuming all of your expenses are covered.
                <br />
                You can now spend up to
              </>
            }
            x26924PerMonth="£269.24 Per Month"
            info="/img/info@2x.png"
            repeat="/img/repeat@2x.png"
          />
        </Route>
        <Route path="/x-guidance">
          <XGuidance {...xGuidanceData} />
        </Route>
        <Route path="/side-bar-menu">
          <SideBarMenu {...sideBarMenuData} />
        </Route>
        <Route path="/x-2">
          <X2
            text40={
              <>
                Assuming all of your expenses are covered.
                <br />
                You can now spend up to
              </>
            }
            x3230PerYear="£3,230 Per Year"
            info="/img/info@2x.png"
            repeat="/img/repeat@2x.png"
          />
        </Route>
        <Route path="/x-3">
          <X2
            text40={
              <>
                Assuming all of your expenses are covered.
                <br />
                You can now spend up to
              </>
            }
            x3230PerYear="£9.62 Per Day"
            info="/img/info@2x.png"
            repeat="/img/repeat@2x.png"
          />
        </Route>
        <Route path="/add-extra-income-or-expense">
          <AddExtraIncomeOrExpense {...addExtraIncomeOrExpenseData} />
        </Route>
        <Route path="/aeioe-1">
          <AEIOE {...aEIOEData} />
        </Route>
        <Route path="/profile">
          <Profile {...profileData} />
        </Route>
        <Route path="/aeioe">
          <AEIOE {...aEIOE2Data} />
        </Route>
        <Route path="/jobs-feature">
          <JobsFeature {...jobsFeatureData} />
        </Route>
        <Route path="/quiz-q1">
          <QuizQ1 {...quizQ1Data} />
        </Route>
        <Route path="/student-deals">
          <StudentDeals {...studentDealsData} />
        </Route>
        <Route path="/quiz-q4">
          <QuizQ4 {...quizQ4Data} />
        </Route>
        <Route path="/quiz-q5">
          <QuizQ5 {...quizQ5Data} />
        </Route>
        <Route path="/quiz-q6">
          <QuizQ6 {...quizQ6Data} />
        </Route>
        <Route path="/quiz-q7">
          <QuizQ7 {...quizQ7Data} />
        </Route>
        <Route path="/quiz-q8">
          <QuizQ8 {...quizQ8Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const group402Data = {
    children: "I want to learn more",
};

const group54Data = {
    children: "Money tips for you!",
};

const moneyTipsFeature3Data = {
    text1: "💸",
    text3: <>Student accommodation – keep your wits about you when renting<br />By second year of your university term, it is likely youll need to rent a property in the private sector. Its vital that you are clued up on your rights and make sure unscrupulous landlords end up taking advantage. There are five things you need to know:</>,
    text4: "😎",
    text5: "😎",
    text6: "💸",
    screenshot20210727At13032: "/img/screenshot-2021-07-27-at-13-03-2@2x.png",
    xboxMenu: "/img/xbox-menu@2x.png",
    testAccount: "/img/test-account@2x.png",
    img_98723: "/img/img-9872-3@2x.png",
    group402Props: group402Data,
    group54Props: group54Data,
};

const sizeXLTypeOutlineIconNoIconCornerRaData = {
    children: "Sign In",
};

const buttonPrimaryData = {
    children: "Sign Up",
};

const mainLandingPageHeroData = {
    place: "Home",
    about: "Features",
    about2: "About",
    contactUs: "Contact Us",
    ourFeatures: "Our Features",
    img_98722: "/img/img-9872-3@2x.png",
    img_98723: "/img/img-9872-3@2x.png",
    aboutUs: "About Us",
    x20: "/img/20@1x.png",
    spanText: "For",
    spanText2: " ",
    spanText3: "Students",
    spanText4: <>,<br /></>,
    spanText5: "",
    spanText6: "By ",
    spanText7: <>Students<br /></>,
    spanText8: "",
    spanText9: "Paving your way to ",
    spanText10: "Financial ",
    spanText11: "Freedom",
    sizeXLTypeOutlineIconNoIconCornerRaProps: sizeXLTypeOutlineIconNoIconCornerRaData,
    buttonPrimaryProps: buttonPrimaryData,
};

const group542Data = {
    children: "Money tips for you!",
};

const moneyTipsFeature2Data = {
    text8: "💸",
    text9: "I want to learn more",
    text10: <>An overdraft will be your buffer<br /><br />Get a student bank account! When choosing a student bank account, aim to get the biggest and longest 0% overdraft you can. An overdraft is where the bank lets you spend more than you&#x27;ve got (at no extra cost), up to a set amount. Often banks charge hefty fees and interest for the privilege, but student account overdrafts are interest-free. Debt is never a good thing, but a student bank account overdraft is an excellent buffer to keep up your sleeve, in case of emergencies.</>,
    text11: "😎",
    text12: "😎",
    text13: "💸",
    screenshot20210727At13032: "/img/screenshot-2021-07-27-at-13-03-2@2x.png",
    xboxMenu: "/img/xbox-menu@2x.png",
    testAccount: "/img/test-account@2x.png",
    img_98723: "/img/img-9872-3@2x.png",
    group54Props: group542Data,
};

const inputTextData = {
    inputText: "/img/bg@2x.svg",
    place: "Name",
};

const inputText2Data = {
    inputText: "/img/bg@2x.svg",
    place: "Email",
    className: "input-text-1",
};

const inputText22Data = {
    inputText: "/img/bg@2x.svg",
    name: "Password",
    show: "Show",
};

const buttonPrimary2Data = {
    children: "Sign Up",
    className: "button-primary-1",
};

const signUpData = {
    rectangle1: "/img/rectangle-1@1x.svg",
    icon: "/img/icon@2x.svg",
    img_98723: "/img/img-9872-3@2x.png",
    overlapGroup1: "/img/saly-31@1x.png",
    signUpHere: "Sign Up Here !",
    text14: "I would like to receive your newsletter and other promotional information.",
    inputTextProps: inputTextData,
    inputText2Props: inputText2Data,
    inputText2Props2: inputText22Data,
    buttonPrimaryProps: buttonPrimary2Data,
};

const widgetMSizeBigLinesChartWithDynamicData = {
    title: "Sales trend",
    text15: "64,3",
    text16: "%",
    details: "Compared to $21,504 last year",
    line2: "/img/img-9872-3-4@2x.png",
    line1: "/img/img-9872-3-4@2x.png",
    name: "Presentation",
    amount: "862",
    chart: "/img/img-9872-3-4@2x.png",
    name2: "Development",
    amount2: "753",
    chart2: "/img/img-9872-3-4@2x.png",
    name3: "Research",
    amount3: "553",
    chart3: "/img/img-9872-3-4@2x.png",
};

const temp1Data = {
    widgetMSizeBigLinesChartWithDynamicProps: widgetMSizeBigLinesChartWithDynamicData,
};

const arrowRightData = {
    src: "/img/double-right-1@2x.png",
};

const quizQ3Data = {
    xboxMenu: "/img/xbox-menu@2x.png",
    testAccount: "/img/test-account@2x.png",
    xboxMenu2: "/img/xbox-menu@2x.png",
    testAccount2: "/img/test-account@2x.png",
    img_98723: "/img/img-9872-3@2x.png",
    text17: "What is an investment bond?",
    answerA: "A life insurance policy",
    a: "A",
    answerC: "A way of protecting your investments",
    answerB: " A way to own government or corporate debt",
    buttonB: "B",
    buttonC: "C",
    doubleRight: "/img/double-right@2x.png",
    arrowRightProps: arrowRightData,
};

const inputText3Data = {
    inputText: "/img/bg@2x.svg",
    place: "Email",
    className: "input-text-2",
};

const inputText23Data = {
    inputText: "/img/bg@2x.svg",
    name: "Password",
    show: "Show",
    className: "input-text-4",
};

const logInData = {
    icon: "/img/icon-8@2x.svg",
    img_98723: "/img/img-9872-3@2x.png",
    loginHere: "Login Here !",
    logIn: "Log In",
    text18: "Forgot your password?",
    xmlid63: "/img/xmlid-63@2x.svg",
    xmlid62: "/img/xmlid-62@2x.svg",
    xmlid61: "/img/xmlid-61@2x.svg",
    xmlid59: "/img/xmlid-59@2x.svg",
    vector2: "/img/vector-1@2x.svg",
    vector3: "/img/vector-2@2x.svg",
    vector4: "/img/vector-3@2x.svg",
    vector5: "/img/vector-4@2x.svg",
    vector6: "/img/vector-5@2x.svg",
    vector7: "/img/vector-6@2x.svg",
    vector8: "/img/vector-7@2x.svg",
    vector9: "/img/vector-8@2x.svg",
    vector10: "/img/vector-9@2x.svg",
    vector11: "/img/vector-10@2x.svg",
    vector12: "/img/vector-11@2x.svg",
    vector13: "/img/vector-25@2x.svg",
    xmlid57: "/img/xmlid-57@2x.svg",
    vector14: "/img/vector-12@2x.svg",
    vector15: "/img/vector-26@2x.svg",
    vector16: "/img/vector-27@2x.svg",
    xmlid53: "/img/xmlid-53@2x.svg",
    vector17: "/img/vector-13@2x.svg",
    vector18: "/img/vector-28@2x.svg",
    vector19: "/img/vector-29@2x.svg",
    vector20: "/img/vector-30@2x.svg",
    vector21: "/img/vector-31@2x.svg",
    vector22: "/img/vector-14@2x.svg",
    vector23: "/img/vector-15@2x.svg",
    vector24: "/img/vector-16@2x.svg",
    vector25: "/img/vector-17@2x.svg",
    vector26: "/img/vector-18@2x.svg",
    xmlid52: "/img/xmlid-52@2x.svg",
    xmlid51: "/img/xmlid-51@2x.svg",
    vector27: "/img/vector-19@2x.svg",
    vector28: "/img/vector-20@2x.svg",
    overlapGroup4: "/img/vector-33@2x.svg",
    overlapGroup5: "/img/vector-34@2x.svg",
    vector29: "/img/vector-36@2x.svg",
    vector30: "/img/vector-37@2x.svg",
    vector31: "/img/vector-35@2x.svg",
    vector32: "/img/vector-32@2x.svg",
    overlapGroup8: "/img/vector-39@2x.svg",
    vector33: "/img/vector-40@2x.svg",
    vector34: "/img/vector-38@2x.svg",
    vector35: "/img/vector-41@2x.svg",
    vector36: "/img/vector-21@2x.svg",
    vector37: "/img/vector-23@2x.svg",
    vector38: "/img/vector-24@2x.svg",
    vector39: "/img/vector-22@2x.svg",
    inputTextProps: inputText3Data,
    inputText2Props: inputText23Data,
};

const group4022Data = {
    children: "I want to learn more",
};

const group543Data = {
    children: "Money tips for you!",
};

const moneyTipsFeature1Data = {
    screenshot20210727At13032: "/img/screenshot-2021-07-27-at-13-03-2@2x.png",
    text19: "💸",
    spanText: "Be the boss of your budget",
    spanText2: <> - your student loan is paid into your bank account in three installments at the start of each term, it might seem like you have loads of cash to spend, but the money needs to last the whole term, spend it wisely! You need to work out how much cash you have coming in including your student loan, any grants, cash from parents and any income from part time work. Equally, you&#x27;ll need an idea of how much money will be going out, including rent, bills, food, socialising, and course materials.<br /><br />Once you&#x27;ve got these, subtract your outgoings from your incomings, and divide by the number of weeks you&#x27;ll be at uni, to see how much you have to live off each month.</>,
    text22: "😎",
    text23: "😎",
    text24: "💸",
    xboxMenu: "/img/xbox-menu@2x.png",
    testAccount: "/img/test-account@2x.png",
    img_98723: "/img/img-9872-3@2x.png",
    group402Props: group4022Data,
    group54Props: group543Data,
};

const signUpWithUnidaysStudentbeansToRedeData = {
    text35: "Sign up with                 &                         to redeem your discount codes!",
    studentbeans: "Studentbeans",
};

const dealsFeatureData = {
    xboxMenu: "/img/xbox-menu@2x.png",
    testAccount: "/img/test-account@2x.png",
    img_98723: "/img/img-9872-3@2x.png",
    overlapGroup1: "/img/quiz-box@1x.svg",
    text34: "Spread the word! As a student you are eligeable to sign up and get discounts from your favourite brands!️",
    unidays: "Unidays",
    arrowLeft: "/img/arrow-left@2x.svg",
    screenshot20210727At11581: "/img/screenshot-2021-07-27-at-11-58-1@2x.png",
    screenshot20210727At11582: "/img/screenshot-2021-07-27-at-11-58-2@2x.png",
    screenshot20210727At11583: "/img/screenshot-2021-07-27-at-11-58-3@2x.png",
    screenshot20210727At12011: "/img/screenshot-2021-07-27-at-12-01-1@2x.png",
    arrowRight: "/img/arrow-right@2x.svg",
    signUpWithUnidaysStudentbeansToRedeProps: signUpWithUnidaysStudentbeansToRedeData,
};

const arrowRight2Data = {
    src: "/img/double-right-1@2x.png",
};

const quizQ2Data = {
    xboxMenu: "/img/xbox-menu@2x.png",
    testAccount: "/img/test-account@2x.png",
    xboxMenu2: "/img/xbox-menu@2x.png",
    testAccount2: "/img/test-account@2x.png",
    img_98723: "/img/img-9872-3@2x.png",
    text36: "An FT reader saves £200 a month for 20 years, receiving an annual rate of interest of 3 per cent. With the effect of compounding, what is the total amount of interest they will have received on their savings?",
    answerA: "Just over £6,000",
    a: "A",
    answerB: "Just over £10,000",
    buttonB: "B",
    answerC: "Just under £18,000",
    buttonC: "C",
    doubleRight: "/img/double-right@2x.png",
    arrowRightProps: arrowRight2Data,
};

const buttonPrimary22Data = {
    children: "Log Out",
};

const sideBarMenuData = {
    techLifeLifeManagement: "/img/tech-life-life-management@2x.png",
    techLifeCommunication: "/img/tech-life-communication-1@2x.png",
    xdelete: "/img/delete@2x.png",
    text39: "Expenditure Guidance",
    line4: "/img/line-3@1x.svg",
    financialQuiz: "Financial Quiz",
    line5: "/img/line-3@1x.svg",
    smartmoneyTips: "SmartMoney Tips",
    line6: "/img/line-3@1x.svg",
    dealsOfTheDay: "Deals of the Day",
    line7: "/img/line-3@1x.svg",
    jobOpportunities: "Job Opportunities",
    line3: "/img/line-3@1x.svg",
    handshake: "/img/handshake@2x.png",
    newJob: "/img/new-job@2x.png",
    gear: "/img/gear@2x.png",
    tuition: "/img/tuition@2x.png",
    exam: "/img/exam@2x.png",
    cardWallet: "/img/card-wallet@2x.png",
    img_98723: "/img/img-9872-3@2x.png",
    techLifeVirtualReality: "/img/tech-life-virtual-reality@2x.png",
    techLifeRemoteLife: "/img/tech-life-remote-life@2x.png",
    buttonPrimary2Props: buttonPrimary22Data,
};

const buttonPrimary23Data = {
    children: "Log Out",
    className: "button-primary-4",
};

const profileData = {
    techLifeLifeManagement: "/img/tech-life-life-management@2x.png",
    techLifeCommunication: "/img/tech-life-communication-1@2x.png",
    xdelete: "/img/delete@2x.png",
    img_98724: "/img/img-9872-3@2x.png",
    kimCarpenterIhignhlvz5QUnsplash1: "/img/kim-carpenter-ihignhlvz5q-unsplash-1@2x.png",
    line4: "/img/line-3@1x.svg",
    anna2UweCoUk: "anna-2@uwe.co.uk",
    phone: "+44 7545 406 333",
    line3: "/img/line-3@1x.svg",
    copy: "/img/copy@2x.png",
    copy2: "/img/copy-1@2x.png",
    gear: "/img/gear-1@2x.png",
    techLifeVirtualReality: "/img/tech-life-virtual-reality@2x.png",
    techLifeRemoteLife: "/img/tech-life-remote-life@2x.png",
    buttonPrimary2Props: buttonPrimary23Data,
};

const group25Data = {
    address: "1 OF 10",
    previous: "PREVIOUS",
    next: "NEXT",
};

const group26Data = {
    byGuru: "By Guru",
    readMore: "Read More",
    notInterested: "Not Interested",
    line11: "/img/line-11@2x.svg",
    line12: "/img/line-12@2x.svg",
};

const group262Data = {
    byGuru: "By Google",
    readMore: "Read More",
    notInterested: "Not Interested",
    line11: "/img/line-11@2x.svg",
    line12: "/img/line-12@2x.svg",
};

const group263Data = {
    byGuru: "By Guru",
    readMore: "Read More",
    notInterested: "Not Interested",
    line11: "/img/line-11@2x.svg",
    line12: "/img/line-12@2x.svg",
    className: "group-11",
};

const group264Data = {
    byGuru: "By AWS",
    readMore: "Read More",
    notInterested: "Not Interested",
    line11: "/img/line-11@2x.svg",
    line12: "/img/line-12@2x.svg",
    className: "group-11",
};

const group265Data = {
    byGuru: "By Guru",
    readMore: "Read More",
    notInterested: "Not Interested",
    line11: "/img/line-11@2x.svg",
    line12: "/img/line-12@2x.svg",
};

const group266Data = {
    byGuru: "By Facebook",
    readMore: "Read More",
    notInterested: "Not Interested",
    line11: "/img/line-11@2x.svg",
    line12: "/img/line-12@2x.svg",
};

const group252Data = {
    address: "1 OF 10",
    previous: "PREVIOUS",
    next: "NEXT",
    className: "group-32",
};

const jobsFeatureData = {
    xboxMenu: "/img/xbox-menu@2x.png",
    testAccount: "/img/test-account@2x.png",
    img_98723: "/img/img-9872-3@2x.png",
    text42: "SEARCH FOR VACANCIES",
    guru: "Guru",
    detective: "/img/detective@2x.png",
    line10: "/img/line-10@1x.svg",
    devopsEngineer: "DEVOPS ENGINEER",
    dataEngineer: "DATA ENGINEER",
    dataScientistJr: "DATA SCIENTIST JR",
    businessAnalyst: "BUSINESS ANALYST",
    cloudEngineer: "CLOUD ENGINEER",
    analystJr: "ANALYST JR",
    group25Props: group25Data,
    group26Props: group26Data,
    group262Props: group262Data,
    group263Props: group263Data,
    group264Props: group264Data,
    group265Props: group265Data,
    group266Props: group266Data,
    group252Props: group252Data,
};

const arrowRight3Data = {
    src: "/img/double-right@2x.png",
    className: "group-33",
};

const arrowRight4Data = {
    src: "/img/double-right-5@2x.png",
    className: "arrow-right-2",
};

const quizQ4Data = {
    xboxMenu: "/img/xbox-menu@2x.png",
    testAccount: "/img/test-account@2x.png",
    xboxMenu2: "/img/xbox-menu@2x.png",
    testAccount2: "/img/test-account@2x.png",
    img_98723: "/img/img-9872-3@2x.png",
    x4Question: "4. Question",
    answerA: "Answer a",
    a: "A",
    answerB: "Answer b",
    buttonB: "B",
    answerC: "Answer c",
    buttonC: "C",
    answerD: "Answer d",
    d: "D",
    arrowRightProps: arrowRight3Data,
    arrowRight2Props: arrowRight4Data,
};

const arrowRight5Data = {
    src: "/img/double-right@2x.png",
    className: "group-33-1",
};

const arrowRight6Data = {
    src: "/img/double-right-5@2x.png",
    className: "arrow-right-3",
};

const quizQ5Data = {
    xboxMenu: "/img/xbox-menu@2x.png",
    testAccount: "/img/test-account@2x.png",
    xboxMenu2: "/img/xbox-menu@2x.png",
    testAccount2: "/img/test-account@2x.png",
    img_98723: "/img/img-9872-3@2x.png",
    x5Question: "5. Question",
    answerA: "Answer a",
    a: "A",
    answerB: "Answer b",
    buttonB: "B",
    answerC: "Answer c",
    buttonC: "C",
    answerD: "Answer d",
    d: "D",
    arrowRightProps: arrowRight5Data,
    arrowRight2Props: arrowRight6Data,
};

const arrowRight7Data = {
    src: "/img/double-right@2x.png",
    className: "group-33-2",
};

const arrowRight8Data = {
    src: "/img/double-right-5@2x.png",
    className: "arrow-right-4",
};

const quizQ6Data = {
    xboxMenu: "/img/xbox-menu@2x.png",
    testAccount: "/img/test-account@2x.png",
    xboxMenu2: "/img/xbox-menu@2x.png",
    testAccount2: "/img/test-account@2x.png",
    img_98723: "/img/img-9872-3@2x.png",
    x6Question: "6. Question",
    answerA: "Answer a",
    a: "A",
    answerB: "Answer b",
    buttonB: "B",
    answerC: "Answer c",
    buttonC: "C",
    answerD: "Answer d",
    d: "D",
    arrowRightProps: arrowRight7Data,
    arrowRight2Props: arrowRight8Data,
};

const arrowRight9Data = {
    src: "/img/double-right@2x.png",
    className: "group-33-3",
};

const arrowRight10Data = {
    src: "/img/double-right-5@2x.png",
    className: "arrow-right-5",
};

const quizQ7Data = {
    xboxMenu: "/img/xbox-menu@2x.png",
    testAccount: "/img/test-account@2x.png",
    xboxMenu2: "/img/xbox-menu@2x.png",
    testAccount2: "/img/test-account@2x.png",
    img_98723: "/img/img-9872-3@2x.png",
    x7Question: "7. Question",
    answerA: "Answer a",
    a: "A",
    answerB: "Answer b",
    buttonB: "B",
    answerC: "Answer c",
    buttonC: "C",
    answerD: "Answer d",
    d: "D",
    arrowRightProps: arrowRight9Data,
    arrowRight2Props: arrowRight10Data,
};

const arrowRight11Data = {
    src: "/img/double-right@2x.png",
    className: "group-33-4",
};

const arrowRight12Data = {
    src: "/img/double-right-5@2x.png",
    className: "arrow-right-6",
};

const quizQ8Data = {
    xboxMenu: "/img/xbox-menu@2x.png",
    testAccount: "/img/test-account@2x.png",
    xboxMenu2: "/img/xbox-menu@2x.png",
    testAccount2: "/img/test-account@2x.png",
    img_98723: "/img/img-9872-3@2x.png",
    x8Question: "8. Question",
    answerA: "Answer a",
    a: "A",
    answerB: "Answer b",
    buttonB: "B",
    answerC: "Answer c",
    buttonC: "C",
    answerD: "Answer d",
    d: "D",
    arrowRightProps: arrowRight11Data,
    arrowRight2Props: arrowRight12Data,
};

const quizLandingPageData = {
    xboxMenu: "/img/xbox-menu@2x.png",
    testAccount: "/img/test-account@2x.png",
    xboxMenu2: "/img/xbox-menu@2x.png",
    testAccount2: "/img/test-account@2x.png",
    img_98723: "/img/img-9872-3@2x.png",
    title: "Financial quiz",
    financialQuiz: "Financial quiz",
    financialQuiz2: "Financial quiz",
    leaderboard: "Leaderboard!",
    leaderboard2: "Leaderboard!",
    leaderboard3: "Leaderboard!",
    text31: "You scored: 5 out of 12!",
    text32: "You scored: 5 out of 12!",
    text33: "You scored: 5 out of 12!",
    text28: "You scored: 5 out of 12!",
    text30: "You scored: 5 out of 12!",
    button: "You scored: 5 out of 12!",
    text25: "You scored: 5 out of 12!",
    text26: "You scored: 5 out of 12!",
    text27: "You scored: 5 out of 12!",
    text29: "You scored: 5 out of 12!",
    startNow: "START NOW!",
};

const xGuidanceData = {
    xboxMenu: "/img/xbox-menu@2x.png",
    img_98723: "/img/img-9872-3@2x.png",
    img_98724: "/img/img-9872-3@2x.png",
    testAccount: "/img/test-account@2x.png",
    techLifeLifeManagement: "/img/tech-life-life-management@2x.png",
    techLifeCommunication: "/img/tech-life-communication@2x.png",
    techLifeVirtualReality: "/img/tech-life-virtual-reality@2x.png",
    group7: "/img/group-7@1x.svg",
    incomeTotal: "INCOME TOTAL",
    price: "£ 4,500.00",
    expenseTotal: "EXPENSE TOTAL",
    x450000: "£ 1,000.00",
    annualBalance: "ANNUAL BALANCE",
    price2: "£ 3,500.00",
    group72: "/img/group-7-1@2x.svg",
    line1: "/img/line-1-1@2x.svg",
    text38: <>Assuming all of your expenses are covered.<br />You can now spend up to</>,
    x6731PerWeek: "£67.31 Per Week",
    info: "/img/info@2x.png",
    rectangle11: "/img/rectangle-11@1x.svg",
    repeat: "/img/repeat@2x.png",
    techLifeRemoteLife: "/img/tech-life-remote-life@2x.png",
};

const addExtraIncomeOrExpenseData = {
    undo: "/img/undo@2x.png",
    img_98723: "/img/img-9872-3@2x.png",
    incomeStream: "Income Stream",
    plus: "/img/plus@2x.png",
    line4: "/img/line-4-1@1x.svg",
    expense: "Expense",
    plus2: "/img/plus@2x.png",
    line5: "/img/line-5-1@1x.svg",
    submit: "SUBMIT",
    line3: "/img/line-3@1x.svg",
};

const aEIOEData = {
    title: "Title",
    paycheck1: "Paycheck #1",
    line9: "/img/line-8@2x.svg",
    edit: "/img/edit@2x.png",
    amount: "Amount",
    price: "£250",
    line8: "/img/line-8@2x.svg",
    edit2: "/img/edit@2x.png",
};

const aEIOE2Data = {
    title: "Title",
    paycheck1: "Netflix",
    line9: "/img/line-8@2x.svg",
    edit: "/img/edit@2x.png",
    amount: "Amount",
    price: "£10",
    line8: "/img/line-8@2x.svg",
    edit2: "/img/edit@2x.png",
};

const quizQ1Data = {
    xboxMenu: "/img/xbox-menu@2x.png",
    testAccount: "/img/test-account@2x.png",
    xboxMenu2: "/img/xbox-menu@2x.png",
    testAccount2: "/img/test-account@2x.png",
    img_98723: "/img/img-9872-3@2x.png",
    text43: "You are applying for a mortgage and the lender is assessing your credit score. What will they not check when determining your score? *",
    answerA: "Annual salary",
    a: "A",
    answerB: "Previous addresses",
    buttonB: "B",
    answerC: "Electoral roll",
    buttonC: "C",
};

const studentDealsData = {
    xboxMenu: "/img/img-9872-3-4@2x.png",
    testAccount: "/img/img-9872-3-4@2x.png",
    img_98722: "/img/img-9872-3-4@2x.png",
    quizBox: "/img/quiz-box@1x.png",
    text44: "Spread the word! As a student you are eligeable to sign up and get discounts from your favourite brands!️",
    text46: "💃 🕺",
    spanText: "Sign up with ",
    spanText2: "Unidays",
    spanText3: " & ",
    spanText4: "Studentbeans",
    spanText5: " to redeem your discount codes!",
    arrowLeft: "/img/img-9872-3-4@2x.png",
    screenshot20210727At11581: "/img/img-9872-3-4@2x.png",
    screenshot20210727At11582: "/img/img-9872-3-4@2x.png",
    screenshot20210727At11583: "/img/img-9872-3-4@2x.png",
    screenshot20210727At12011: "/img/img-9872-3-4@2x.png",
    arrowRight: "/img/img-9872-3-4@2x.png",
};

