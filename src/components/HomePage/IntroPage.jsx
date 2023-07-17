import React from 'react'
import { LibraryCanvas } from './LibraryCanvas'

export const IntroPage = () => {
  return (
    <>
    <div className='container wel'>
        <div className='row'>
            <div className="col-md-12 welcome">
                <div className='col-md-6 intro-texts'>
                    <div className='headers'>
                    <h1>Welcome To</h1>
                    <h1><b> URC Learning Hub</b></h1>
                    </div>
                    <div className='words'>
                        <p>This online serves a place where all students can get access to books that a not publicly availble but needed for academic words.
                        </p>
                        <p>
                            Not only to books but can get access to free video tutorials on some technological
                            skills sets such as <i>web design and programming, mobile app design, AI and Machine Learing,
                                animations, video editing,etc.  
                            </i>
                        </p>
                    </div>
                    {/* <div>
                        <button className='btn btn-primary'>Learn More</button>
                    </div> */}
                </div>
                <div className='col-md-6 d-model'>
                    <LibraryCanvas />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
