import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App userData={{"name":"analyzer","emailId":"analyzer@gmail.com","phoneNo":"12345555221","projects":[],"resume":"","experiences":[{"companyName":"analyzer","role":"analyzer","description":"analyzer","technologiesUsed":[],"duration":"analyzer","_id":"67496575bf0e798e7a8312da"}],"techStacks":[],"contactDetailsUrls":[],"codingProfilesUrls":[],"certificationsUrls":[],"achievements":[{"title":"analyzer","description":"analyzer","_id":"67496575bf0e798e7a8312db"}],"about":"analyzer","profilePhoto":"","_id":"67496575bf0e798e7a8312d9","createdAt":"2024-11-29T06:55:49.789Z","updatedAt":"2024-11-29T06:55:49.789Z","__v":0}} />
  </StrictMode>,
)
