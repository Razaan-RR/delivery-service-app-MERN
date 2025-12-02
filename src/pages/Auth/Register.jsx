import { useForm } from 'react-hook-form'

function Register() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm()

  const handleRegistration = (data) => {
    console.log(data)
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#ffe9ec,#e8f3ff,#f4fff0,#fff6e5)] backdrop-blur-xl bg-opacity-60">
      <div className="min-h-screen flex">
        <div className="w-1/2 hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1200"
            className="w-full h-full object-cover"
            alt="Register"
          />
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center p-10">
          <div className="w-full max-w-md bg-white/60 backdrop-blur-xl rounded-2xl p-8 shadow-md">
            <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
              Create Account
            </h1>

            <form
              onSubmit={handleSubmit(handleRegistration)}
              className="space-y-5"
            >
              <div>
                <input
                  type="name"
                  {...register('name', { required: true })}
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border rounded-lg outline-none bg-transparent"
                />
                {errors.name?.type === 'required' && (
                  <p className="text-red-500" role="alert">
                    Name is required
                  </p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  {...register('email', { required: true })}
                  placeholder="Email"
                  className="w-full px-4 py-3 border rounded-lg outline-none bg-transparent"
                />
                {errors.email?.type === 'required' && (
                  <p className="text-red-500" role="alert">
                    Email is required
                  </p>
                )}
              </div>

              <div>
                <input
                  type="password"
                  {...register('password', { required: true, minLength: 6 })}
                  placeholder="Password"
                  className="w-full px-4 py-3 border rounded-lg outline-none bg-transparent"
                />
                {errors.password?.type === 'required' && (
                  <p className="text-red-500" role="alert">
                    Password is required
                  </p>
                )}
                {errors.password?.type === 'minLength' && (
                  <p className="text-red-500" role="alert">
                    Password must be at least 6 letters
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold"
              >
                Register
              </button>

              <p className="text-center text-gray-600">
                Already have an account?{' '}
                <span className="text-blue-600 cursor-pointer">Login</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
