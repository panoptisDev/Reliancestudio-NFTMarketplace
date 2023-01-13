import { Link } from "react-router-dom";

export const NftCard = ({ data, text, date, from})=>{

    let display = 'inline-block';
    if(data.data.name && text && text.length != 0){
        if(data.data.name.toLowerCase().indexOf(text.toLowerCase()) == (-1)){
            display = 'none';
        }
    }

    if(date < from){
        display = 'none';
    }

    return(
        <div className='inline-block border border-[#232323] bg-[#1a1a19] hover:bg-[#242424] w-[260px] h-[339px] rounded-[15px] cursor-pointer' style={{ display: display }}>
             <Link to={`/item/${data._id}`}>
                <div className="overflow-hidden relative px-[10px] pt-[10px]">
                    {
                        data.status === 'listed' && 
                        <img
                            src={data.data.url}
                            alt="/"
                            className="h-[250px] w-[240px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                        />
                    }
                    {
                        data.status === 'delisted' && 
                        <img
                            src={data.data.url}
                            alt="/"
                            className="h-[250px] blur-sm bg-black opacity-30 w-[240px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                        />
                    }
                    {
                        data.status === 'delisted' &&
                        <p className="absolute top-0 ml-[69px] mt-[120px] lg:ml-[68px] lg:mt-[120px] text-[26px] text-[#828383] font-gilroy">DELISTED</p>
                    }
            
                </div>
                <h3 className="mt-[12px] text-[20px] font-gilroy text-white hover:text-[#beff55] max-w-[250px] truncate px-5">{data.data.name}</h3>
                <p className="text-sm font-gilroy max-w-[250px] truncate text-[#888989] px-5">{data.data.description}</p>
             </Link>
        </div>
    )

}

export default NftCard;