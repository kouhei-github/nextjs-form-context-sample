/* Modal について
 *  max-width とページ左右の余白を設定した共通コンポーネント
 *  コンポーネントを作るときは基本的にこのコンポーネントで囲う
 *  Container の中で Container を使うと余白がずれるので気をつける
 */

import React, {useState, useEffect} from 'react'

type Props = React.HTMLAttributes<HTMLDivElement> & {
  fullWidth?: boolean
  children: React.ReactNode
  buttonImage?: string
  contentWidth?: string
  initOpen?: boolean
};

const Container = (props: Props): JSX.Element => {
  const {
    fullWidth = false,
    children,
    buttonImage,
    contentWidth = 'md:max-w-[800px]',
    initOpen = true,
    className = '',
    ...divHTMLAttributes
  } = props;
  const [popCard, setPopCard] = useState("inline-block");
  const [fade, setFade] = useState(initOpen);

  const handleXClick = () => {
    setPopCard("hidden left-[600px]");
    setFade(false);
  };

  const openModal = () => {
    setPopCard("inline-block");
    setFade(true);
  }

  useEffect(() => {
    if (fade) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [fade])

  return (
      <>
        {fade ?
            <div className="container-fluid w-full h-[80%] flex flex-wrap items-center justify-between px-6">
              {/* {modal start} */}
              <>
                <div className={popCard +"overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transform translate-x-0 transition-all duration-150 delay-150 "+`${fade ? "opacity-100" : "opacity-0"}`}>
                  <div className="modal-dialog absolute w-full min-h-screen opacity-50 bg-black"></div>

                  <div className={`${contentWidth} modal-content absolute bg-white h-full inset-x-4 md:h-[98%] md:top-2 lg:top-2 w-11/12 mx-auto rounded shadow-lg z-50 overflow-y-auto`}>
                {/* {close button} */}
                    <div className="modal-close relative h-0 w-30 cursor-pointer flex flex-col items-center mt-4 mr-4 text-black text-sm z-50">
                      <div className="absolute top-0 right-0 md:h-11 md:w-11 h-6 w-6 ..." onClick={handleXClick}>
                        <button type="button" data-dismiss="modal" className="closebtn close py-0 md:py-6">
                          <img src="https://insyokuoshigoto.indeedlptest.work/wp-content/themes/indeedhaken/assets/newTemplates/insyokuoshigoto01/images/popup2.png" alt=""/>
                        </button>
                      </div>
                    </div>
                    {/* {close button} */}

                    <div className="modal-content py-4 text-left px-2">
                      {/* <!--Body--> */}

                      { children }

                      {/* <!--Body--> */}
                    </div>
                  </div>
                </div>
              </>
            {/* {modal end} */}
          </div>
          :
          <div onClick={() => openModal()} className={"sticky bottom-2 md:bottom-8"}>
            <img src={buttonImage} alt="" className={"w-2/3 mt-10 mx-auto md:w-[360px]"} />
          </div>
        }
      </>
  );
};

export default Container;
