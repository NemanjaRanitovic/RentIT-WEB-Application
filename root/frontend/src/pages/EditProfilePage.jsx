import React from 'react'

const EditProfilePage = () => {
  return (
    <>
        <div className='mr-[-8px] ml-[-8px] flex flex-row'>
                <div className='p-4 ml-[300px]'>
                    <div class="leading-[35px]">
                        <div className="w-[450px] mb-4">
                            <div className='shadow-xl relative flex flex-col min-w-0 break-words bg-[#f5f6fa] bg-clip-border 
                                            border-solid border-0 border-inherit rounded-md mb-4'>
                                <div className="flex-auto min-h-[1px] p-4">
                                    <div className='flex flex-col items-center text-center'>
                                        <img src='/people01.png' alt='Admin' className='rounded-full w-[150px]'/>
                                        <div className='mt-3'>
                                            <p className='text-secondary font-poppins text-[34px]'>{User.Username}</p>
                                            <p className='text-secondary mb-1 font-poppins text-[16px]'>{User.Name} {User.Lastname}</p>
                                            <p className='text-secondary mb-1 font-poppins text-[16px]'>
                                                {
                                                    User.IsAdmin === "true"? 
                                                    "Profile type: Admin"
                                                    :
                                                    User.IsManager === "true"?
                                                    "Profile type: Manager"
                                                    :
                                                    "Profile type: User"
                                                }   
                                            </p>
                                            <button className='rounded-md bg-third font-poppins text-[18px] py-[10px] px-[20px] 
                                                               hover:bg-[#037f85] text-primary mr-[10px] ease-in-out duration-150'>
                                                Edit Profile
                                            </button>
                                            <button className='rounded-md bg-none border-[1px] border-[#00ADB5] font-poppins 
                                                                text-[18px] py-[10px] px-[20px] text-third ml-[10px] 
                                                                hover:text-primary hover:bg-third ease-in-out duration-150'>
                                                Messages
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[800px] py-4'>
                    <div className='shadow-xl relative flex flex-col min-w-0 break-words bg-[#f5f6fa] bg-clip-border 
                                    border-solid border-0 border-inherit rounded-md mb-4'>
                        <div className='flex-auto min-h-[1px] p-4'>
                            <div className='felx flex-row'>
                                <div className='w-[300px] py-4'>
                                    <div className='flex flex-row'>
                                        <p className='font-poppins text-secondary text-[18px] font-semibold'>First Name</p>
                                        <p className='font-poppins absolute left-[200px] text-[18px] text-[#9a9a9c]'>{User.Name}</p>
                                    </div>
                                </div>
                                <hr class="solid"></hr>
                                <div className='w-[300px] py-4'>
                                    <div className='flex flex-row'>
                                        <p className='font-poppins text-secondary text-[18px] font-semibold'>Last Name</p>
                                        <p className='font-poppins absolute left-[200px] text-[18px] text-[#9a9a9c]'>{User.Lastname}</p>
                                    </div>
                                </div>
                                <hr class="solid"></hr>
                                <div className='w-[300px] py-4'>
                                    <div className='flex flex-row'>
                                        <p className='font-poppins text-secondary text-[18px] font-semibold'>Username</p>
                                        <p className='font-poppins absolute left-[200px] text-[18px] text-[#9a9a9c]'>{User.Username}</p>
                                    </div>
                                </div>
                                <hr class="solid"></hr>
                                <div className='w-[300px] py-4'>
                                    <div className='flex flex-row'>
                                        <p className='font-poppins text-secondary text-[18px] font-semibold'>Date of Birth</p>
                                        <p className='font-poppins absolute left-[200px] text-[18px] text-[#9a9a9c]'>{UserBirthDay}</p>
                                    </div>
                                </div>
                                <hr class="solid"></hr>
                                <div className='w-[300px] py-4'>
                                    <div className='flex flex-row '>
                                        <p className='font-poppins text-secondary text-[18px] font-semibold'>Email</p>
                                        <p className='font-poppins absolute left-[200px] text-[18px] text-[#9a9a9c]'>{User.Email}</p>
                                    </div>
                                </div>
                                <div className='shadow-xl relative flex flex-col min-w-0 break-words bg-[#f5f6fa] bg-clip-border 
                                            border-solid border-0 border-inherit rounded-md'>
                                    <Field instagram={'_nemkac'} twitter={'@LickiDodjos'} facebook={"Nemanja Todorovic"} phone={"+381 644316167"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default EditProfilePage