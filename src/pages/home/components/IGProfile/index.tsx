import IGUser from "components/IGUser";
import { useAppDispatch, useAppSelector } from "hook";

const IGProfile: React.FC = () => {
    // 使用 AppSelector 取得資料
    const friendReducer = useAppSelector( state => state.friendReducer)
    // 將取得的資料分割
    const friends = friendReducer.friends.slice(0, 4)
    

    return (
        <div className="mt-8 ml-8 shadow-lg box-border p-2">
            <IGUser
                account="bruce_fe"
                location="布魯斯前端"
                avatar="/images/avatar.png"
                size="medium"
            />
            <p className="font-bold text-gray-400 mt-4 mx-4 mb-3 text-sm">
                You are following
            </p>
            {friends.map( item => {
                return (
                    <div className="-mt-3" key={item.id}>
                        <IGUser
                            id={item.id}
                            account={item.account}
                            avatar={item.avatar}
                            location={item.location}
                            isFollowing={item.isFollowing}
                            showFollow
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default IGProfile;