import React from 'react'

function UserPost() {
  return (
    <div>
      <div className="container">
      <div className="d-list-item ms-5">
        <div className="d-flex align-items-center">
          <div className="media mt-3">
            <div className="">
              <img className="pe-2" src="../../image/f-user-1.png" alt="" />
            </div>
          </div>
          <div className="media-body ms-2 mt-4 text-muted">
            <div className="t_title pb-2">
              <a href="#" className="text-decoration-none">
                <h4 className="text-dark">Eh Jewel</h4>
              </a>
            </div>
            <div className="d-flex justify-content-start">
              <div>
                <h6 className="pe-4">
                  <i className="bi bi-cup-hot"></i>
                  Conversation Starter
                </h6>
              </div>
              <div>
                <h6>
                  <i className="bi bi-calendar"></i>
                  January 16 at 10:32 PM
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="user-body mt-5">
          <h2 className="fw-bold fs-3 text-white">
            Q: Sticky navbar is shown,
            but state is inactive
          </h2>
          <p className="text-white pt-3">
            Daft blimey cor blimey guvnor jolly good don't get shirty with me
            what a load of rubbish no biggie ruddy cuppa cheesed off bleeding,
            arse spiffing it's your round codswallop gormless off his nut bodge
            I smashing, mufty chancer Oxford my good sir bobby it's all gone to
            pot bite your arm off wind up Harry. Blatant A bit of how's your
            father it's your round are you taking the piss gutted mate
            codswallop golly gosh, James Bond I old chimney pot is bum bag do
            one, fanny around crikey pukka tomfoolery nancy boy.
          </p>
          <p className="text-white">
            Spiffing good time burke give us a bell absolutely bladdered gutted
            mate tosser cuppa happy days Harry young delinquent amongst car
            boot, baking cakes cheesed off I down the pub what a load of rubbish
            such a fibber knees up me old mucker wind up smashing. My lady
            cheeky faff about what a plonker so I said pardon you chimney pot
            cheesed off haggle quaint, cup of tea gormless excuse my French mush
            bleeding knackered squiffy mush, such a fibber dropped a clanger
            jolly good he lost his bottle vagabond no biggie fanny around
            brilliant. Chip shop absolutely bladdered cockup up the kyver
            cracking goal is pardon you cuppa easy peasy the full monty the
            bee's knees blatant, bugger pear shaped a load of old tosh zonked
            give us a bell up the duff bleeder fantastic James Bond chap. Off
            his nut the BBC mufty hotpot my lady I super tomfoolery nancy boy,
            loo fanny around bits and bobs nice one only a quid Eaton blow off
            barmy, knees up bobby cup of char barney a no biggie gormless.
          </p>
        </div>
      </div>
    </div>
    {/* Kullanıcı Yorum Kısmı */}
    <div className="container mt-5">
      <div className="d-list-item ms-5">
        <div className="d-flex align-items-center">
          <div className="media mt-3">
            <div className="">
              <img className="pe-2" src="../../image/f-user-1.png" alt="" />
            </div>
          </div>
          <div className="media-body ms-2 mt-4 text-muted">
            <div className="t_title pb-2">
              <a href="#" className="text-decoration-none">
                <h4 className="text-dark">Eh Jewel</h4>
              </a>
            </div>
            <div className="d-flex justify-content-start">
              <div>
                <h6 className="pe-4">
                  <i className="bi bi-cup-hot"></i>
                  Conversation Starter
                </h6>
              </div>
              <div>
                <h6>
                  <i className="bi bi-calendar"></i>
                  January 16 at 10:32 PM
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="user-body mt-3">
          <p className="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            dicta, maiores excepturi possimus cumque vero tempore eveniet.
            Deleniti explicabo deserunt, tenetur praesentium eius facere vitae
            sapiente quae suscipit optio nemo unde iste distinctio nihil debitis
            aliquid ipsum excepturi quas labore repellendus atque. Ab nam sequi
            aperiam quia, repudiandae aliquam.
          </p>
          <button className="btn btn-primary rounded-3">Reply</button>
          <button class="btn btn-light rounded-3 border">Helpful</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default UserPost
