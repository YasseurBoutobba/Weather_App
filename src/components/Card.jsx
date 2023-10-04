const Card = ({style, hour , temp, condition} = props) => {
    return ( 
        <div style={style} className="card  font-poppins px-6 py-4 w-fit text-center h-fit rounded-[16px]">
            <p className=" font-medium text-gray-800 text-sm">{hour}</p>
            <h1 className=" text-2xl text-gray-500 font-medium my-2">{parseInt(temp)}°</h1>
            <p className=" font-medium text-gray-400 text-[12px] ">{condition}</p>
        </div>
     );
}
 
export default Card;