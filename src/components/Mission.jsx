import MissionImg from "../assets/mission.png"
import Vision from "../assets/vision.png"
import visionbg from "../assets/visionbg.png";


const Mission = () => {
  return (
    <div className="w-11/12 lg:w-8/12 mx-auto  flex flex-col md:flex-row gap-8 py-16 justify-center">
        <div className="bg-blue-50  w-[335px] rounded-2xl shadow-lg p-4 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
                <h1 className="text-3xl font-semibold">Mission</h1>
                <p>To be the leading security services provider by deploying cutting-edge technology, trained personnel, and systems designed to meet the evolving dynamics of the security environment.</p>
            </div>
            <img src={MissionImg} alt="" className="" />
        </div>
        <div className="bg-blue-50  w-[335px] rounded-2xl shadow-lg p-4 flex flex-col justify-between">
            <div className="space-y-6">
                <h1 className="text-3xl font-semibold">Vision</h1>
                <p>To be a leading and trusted solutions provider recognized for professionalism, excellence, and innovation.</p>
            </div>
            <img src={Vision} alt="" />
        </div>
    </div>
  )
}

export default Mission