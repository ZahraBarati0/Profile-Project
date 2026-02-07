import './App.css'
import avatarImage from './assets/profile.jpg'
import ProfilePage from './components/ProfilePage'
function App() {
  const user = {
    name: "Zahra Barati",
    username: "@ZahraBarati",
    avatarImage: avatarImage,
    xp: 90,
    lastActive: "Feb 06 2026",
    streakDays: 4,
    longestStreak: 10,
    recentBadgesText: "No badge earned yet.",

    personalInfo: {
      Email:'zahrabarati0281@gmail.com',
      Gender:'Female',
      Country:'Iran',
      "Province or State":'Khorasan Razavi',
      "Teaching Experience":"6",
      "Date of Birth":"10/27/02",
      "Online Portfolio Link":"N/A",
      "Linkedin Link":"Open the Link",
      Languages: "Farsi, English",
      Bio:"ESL Teacher"
    },
    accountDetails: {
      Role:"Teacher",
      Status: "Active",
      Verification: "Verified"
    }
  }
  return (
    <div className='page'>
      <ProfilePage user={user}></ProfilePage>
    </div>
  )
}

export default App
