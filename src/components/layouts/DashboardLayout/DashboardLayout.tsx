import { DashboardHeader } from "../../global"

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    return (
        <div className='dashboard-layout'>
            <DashboardHeader />
            <div>{ children }</div>
        </div>
    )
}

export default DashboardLayout