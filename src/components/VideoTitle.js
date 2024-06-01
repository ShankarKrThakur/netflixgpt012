
const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-10 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold w-1/2">{title}</h1>
      <p className="text-sm py-6 w-2/5">{overview}</p>
      <div>
        <button className="bg-white text-black p-2 m-2 px-6 rounded-lg hover:bg-opacity-80">▶️Play</button>
        <button className="bg-gray-700 text-white p-2 m-2 px-6 bg-opacity-50 rounded-lg">ℹ️ More Info</button>
      </div>
      
    </div>
  )
}

export default VideoTitle
