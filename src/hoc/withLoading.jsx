import { PiSpinnerThin } from "react-icons/pi"

// eslint-disable-next-line no-unused-vars
function withLoading(Component) {
    // Props ở đây sẽ nhận từ Component(Chính là thằng cha ngoài cùng sử dụng -> Ở đây là userProfile)
    const WrappedComponent = ({ isLoading, ...props }) => {
        if (isLoading) {
            return (
                <div>
                    <PiSpinnerThin />
                </div>
            )
        }

        return <Component {...props} />
    }
    return WrappedComponent
}

export default withLoading
