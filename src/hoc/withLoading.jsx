import { PiSpinnerThin } from "react-icons/pi"

// eslint-disable-next-line no-unused-vars
function withLoading(Component) {
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
