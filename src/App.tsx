import './App.css'
import { Header } from './components/header/Header'
import { Posts } from './components/posts/Posts'
import { Highlights } from './components/highlights/Highlights'
import { PostPage } from './components/postPage/PostPage'
import { Routes, Route } from 'react-router-dom'

function App() {
	return (
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/post/:id" element={<PostPage />} />
		</Routes>
	)
}

function Main() {
	return (
		<>
			<Header />
			<Highlights />
			<Posts />
		</>
	)
}


export default App