import { useParams } from 'react-router-dom';
import SuggestedArticles from '../../components/SuggestedArticles/SuggestedArticles';
import ArticleDetail from '../../components/ArticleDetail/ArticleDetail';
import Newlatters from '../../components/Newlatters/Newlatters';

export default function Detail() {
  const { id } = useParams();
  return (
    <div className='pb-30 px-28 pt-150 max-lg:pt-[92px]'>
      <div className=' flex flex-col items-end gap-8 max-lg:pt-2.5 max-md:pt-0'>
        <div className='flex gap-8 max-lg:gap-4 max-md:flex-col-reverse'>
          <div className='min-[1330px]:pl-8 pl-0'>
            <SuggestedArticles id={id} />
          </div>
          <div className='min-[1330px]:pr-8 pr-0'>
            <ArticleDetail id={id} />
          </div>
        </div>
        <div className='lg:w-[66.6118%]'>
          <div className='min-[1330px]:pr-8 pr-0'>
            <Newlatters para='Newlatters' h2='Stories and interviews' text='Subscribe to learn about new product features, the latest in technology, solutions, and updates.' />
          </div>
        </div>
      </div>
    </div>
  )
}
