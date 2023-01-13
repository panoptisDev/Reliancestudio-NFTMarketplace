import "./Loading.css";
import LoadingGif from "../../assets/loading.gif"

export const Loading = () => {
    return (
        <div className="fixed top-0 right-0 left-0 w-full min-h-screen bg-black opacity-60">
            <div className="flex flex-col items-center text-center justify-center loading">
                <img
                    src={LoadingGif}
                    alt="/"
                    className="w-[70px] h-[70px] ml-3" 
                />
                <p className="font-gilroy mt-2 font-semibold text-[16px] text-white">Please waite...</p>
            </div>
        </div>
    )
}

export default Loading;