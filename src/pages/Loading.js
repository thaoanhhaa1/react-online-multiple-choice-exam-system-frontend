import React from 'react';

const Loading = () => {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-slate-200 min-h-screen">
            <div className="spinner-box">
                <div className="solar-system">
                    <div className="earth-orbit orbit">
                        <div className="planet earth"></div>
                        <div className="venus-orbit orbit">
                            <div className="planet venus"></div>
                            <div className="mercury-orbit orbit">
                                <div className="planet mercury"></div>
                                <div className="sun"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loading;
