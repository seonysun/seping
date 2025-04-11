/* eslint-disable react/no-array-index-key */
import { useQuery } from '@tanstack/react-query';
import Banner from './Banner';
import ChallengeCard from '../../components/Card/ChallengeCard';
import { MAX_LIST_LENGTH } from '../../constants/uiData';
import challengeOptions from '../../utils/api/challengeOptions';

function Home() {
  const { data, isLoading, isError } = useQuery(
    challengeOptions.challengeList(),
  );

  const renderContent = () => {
    if (isLoading) {
      return Array.from({ length: MAX_LIST_LENGTH.HOME.LANDING }).map(
        (_, i) => <ChallengeCard key={i} isLoading />,
      );
    }

    if (isError) {
      return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;
    }

    if (data?.length === 0) {
      return <div>표시할 챌린지가 없습니다.</div>;
    }

    return data.map((item, i) => (
      <ChallengeCard key={item?.id ?? i} item={item} isLoading={false} />
    ));
  };

  return (
    <>
      <Banner />
      <div className="flex flex-wrap gap-4 p-4 lg:gap-x-6 xl:gap-x-8">
        {renderContent()}
      </div>
    </>
  );
}

export default Home;
