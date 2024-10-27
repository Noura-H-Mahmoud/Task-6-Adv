import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import { useSelector } from 'react-redux'
import { selectTheme } from './redux/sliceMode'

const data = {
  Name: 'Your Name',
  list: [
    {
      link: '/Task-6-Adv/',
      linkTitle: 'Blog'
    },
    {
      link: '/Task-6-Adv/projects',
      linkTitle: 'Projects'
    },
    {
      link: '/Task-6-Adv/about',
      linkTitle: 'About'
    },
    {
      link: '/Task-6-Adv/newlattes',
      linkTitle: 'Newsletter'
    }
  ]
}

const list = [
  { content: 'Twitter' },
  { content: 'LinkedIn' },
  { content: 'Email' },
  { content: 'RSS feed' },
  { content: 'Add to Feedly' }
]
function App() {
  const darkMode = useSelector(selectTheme);
  if (darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  return (
    <section className='dark:bg-darkColor dark:text-white w-full'>
      <div className='max-w-[1440px] w-full mx-auto'>
        <NavBar data={data} />
        <div>
          <Outlet />
        </div>
        <Footer ul={list} />
      </div>
    </section>
  )
}

export default App
