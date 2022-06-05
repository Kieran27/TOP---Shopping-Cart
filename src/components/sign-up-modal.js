import React from 'react'

const SignUpModal = () => {
  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-header">Join The Group</div>
        <div className="modal-body">
          <p>Sign up now to access exciting new offers, latest news and more!</p>
        </div>
        <div className="modal-footer">
          <form>
            <input type="email" placeholder="Email Address"/>
            <input value="Sign Up" type="submit"/>
          </form>
        </div>
        <button className="modal-close">X</button>
      </div>
    </div>
  )
}

export default SignUpModal
