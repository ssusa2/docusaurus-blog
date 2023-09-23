import React,{useEffect, useState} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import BlogSidebar from '@theme/BlogSidebar';

export default function BlogLayout(props) {



  const [scroll, setScroll] = useState(false);

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll); //clean up
      };
    }, []);
  
  const handleScroll = () => {
    // 스크롤이 Top에서 50px 이상 내려오면 true값을 useState에 넣어줌
    console.log("window.scrollY",window.scrollY);
      if(window.scrollY >= 50){
        setScroll(true);
        console.log(scroll)
      }else{
      // 스크롤이 50px 미만일경우 false를 넣어줌
        setScroll(false);
      }
  
    };

  console.log(scroll)

  const {sidebar, toc, children, ...layoutProps} = props;
  const hasSidebar = sidebar && sidebar.items.length > 0;
  return (
    <Layout {...layoutProps}>
      <div className="container margin-vert--lg">
        <div className="row"
        style={{
justifyContent:"center"
        }}
        >
          <BlogSidebar sidebar={sidebar} />
          <main
          style={{
            maxWidth:700,left:20
          }}
            className={clsx('col', {
              'col--7': hasSidebar,
              'col--9 col--offset-2': !hasSidebar,
            })}
            itemScope
            itemType="http://schema.org/Blog">
            {children}
          </main>
          {scroll ? <div className="col col--2">{toc}</div> : <div style={{
            width:"100%",
            maxWidth:"220px"
          }}></div>}
        </div>
      </div>
    </Layout>
  );
}
