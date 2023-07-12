import React from 'react'
import { Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'

const Feedback = () => {
    const navigate = useNavigate();
    const { user } = useUserAuth();
    const handleBack = async () => {
        navigate(-1);
    }

    return (
        <>
            <div className="window">
                <div className="p-4 box text-center ">
                    <div className="form">
                        <div class="mb-3 row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
                                <span>{user.email}</span>
                            </div>

                        </div>
                        <div className="mb-3 row">
                            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                            <div class=" col-sm-10">
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                    </div>
                    Feedback Accha Wala de re!!!
                    <br />
                    <Link>
                        <Button className='m-3' onClick={handleBack}>Back</Button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Feedback