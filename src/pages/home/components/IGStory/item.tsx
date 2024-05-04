import { itemProps } from "type/dataType"


const Item: React.FC<itemProps> = (item) => {
    return (
        <div className="text-center">
            <div
                className="w-[56px] h-[56px] p-[3px] ring-2 border-2 border-white ring-red-500 rounded-full mx-[11px] overflow-hidden"
                style={{
                    backgroundImage: `url(${item.avatar})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >
                {/* <img className="w-full rounded-full" src={avatar} /> */}
            </div>
            <p className="text-xs mt-1">{item.name}</p>
        </div>
    );
};

export default Item;