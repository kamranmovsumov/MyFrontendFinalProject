import React from 'react'

const Contact = () => {
    return (
        <div className="container">
            <div className="mt-5 col-lg-6 m-auto">
                <div className="col-md-12 col-md-offset-3">
                    <div className="well well-sm">
                        <h3 className='text-center'>Contact us</h3>
                        <div className="form-group">
                            <label className="col-md-12 control-label" htmlFor="name">Name</label>
                            <div className="col-md-12">
                                <input id="name" name="name" type="text" placeholder="Your name" className="form-control" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-md-12 control-label" htmlFor="email">Your E-mail</label>
                            <div className="col-md-12">
                                <input id="email" name="email" type="text" placeholder="Your email" className="form-control" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-md-12 control-label" htmlFor="message">Your message</label>
                            <div className="col-md-12">
                                <textarea className="form-control" id="message" name="message" placeholder="Please enter your message here..." rows="5"></textarea>
                            </div>
                        </div>

                        <div className="form-group mt-2">
                            <div className="col-md-12 text-right">
                                <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact