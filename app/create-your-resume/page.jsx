import React from "react";

const EditResume = () => {
  return (
    <>
      <div className="grid grid-cols-2 h-screen">
        <div className="bg-business py-8 px-4">
          <div className="text-2xl font-bold flex justify-center items-center">
            <div className="flex justify-between space-x-20">
              <div className="">Resume</div>
              <div className="radial-progress" style={{ "--value": 70 }}>
                70%
              </div>
            </div>
          </div>
          <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" checked="checked" />
              <div className="collapse-title text-xl font-bold">
                Personal Information
              </div>
              <div className="collapse-content">
                <div className="flex flex-wrap justify-around">
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">First Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Last Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap justify-around">
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Email ID</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Phone Number</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap justify-around">
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">City</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Country</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-bold">Education</div>
              <div className="collapse-content">
                <p>Hello</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-bold">
                Professional Summary
              </div>
              <div className="collapse-content">
                <p>Hello</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary">Right Content</div>
      </div>
    </>
  );
};

export default EditResume;
