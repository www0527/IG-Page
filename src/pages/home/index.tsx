import IGContainer from "components/IGContainer";
import IGHeader from "components/IGHeader";
import IGStory from "./components/IGStory";
import IGPost from "./components/IGPostList";
import IGProfile from "./components/IGProfile";
import { useGetIGPostsQuery } from "services/homeServices";
import Loading from "components/Loading/Loading";

const IGPostList: React.FC = () => {
  const { data, isLoading } = useGetIGPostsQuery("all");

  return (
    <>
      {
        isLoading ? (
          <div className="flex justify-center w-full">
            <Loading />
          </div>
        ) : (
          data?.map((item) => {
            return (
              <IGPost
                key={item.id}
                location={item.location}
                avatar={item.avatar}
                photo={item.photo}
                account={item.account}
                likes={item.likes}
                description={item.description}
                hashTags={item.hashTags}
                createTime={item.createTime}
              />
            )
          })
        )
      }
    </>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <IGHeader />
      <IGContainer>
        <div className="flex lg:justify-center">
          {/* 左側 */}
          <div className="w-full lg:w-[600px]">
            {/* IGStory */}
            <IGStory />
            <IGPostList />
          </div>
          {/* 右側 */}
          <div className="hidden lg:block lg:w-[424px]">
            <IGProfile />
          </div>
        </div>
      </IGContainer>
    </>
  )
};

export default Home;
