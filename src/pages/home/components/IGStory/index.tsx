import { useGetIGStoriesQuery } from "services/homeServices";
import Item from "./item";
import Loading from "components/Loading/Loading";

// TODO del

const IGStory: React.FC = () => {
    // 在想要串連的組件中使用 Hook 拿到資料
    const { data, isLoading } = useGetIGStoriesQuery("all");


    return (
        <div className="w-full h-[110px] box-border flex items-center overflow-x-auto overflow-y-hidden shadow-md no-scrollbar lg:my-8">
            {
                isLoading ? (
                    <div className="flex justify-center w-full">
                        <Loading />
                    </div>
                ) : (
                    data?.map(item => {
                        return (
                            <Item
                                key={item.id}
                                name={item.name}
                                avatar={item.avatar}
                            />
                        )
                    })
                )
            }
        </div >
    );
};

export default IGStory;