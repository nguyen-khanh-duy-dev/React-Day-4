import { PiSpinnerThin } from "react-icons/pi"

// eslint-disable-next-line no-unused-vars
function withLoading(Component) {
    const WrappedComponent = ({ isLoading }) => {
        if (isLoading) {
            return (
                <div>
                    <PiSpinnerThin />
                </div>
            )
        }

        return <Component />
    }
    return WrappedComponent
}

export default withLoading
