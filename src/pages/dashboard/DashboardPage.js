import Dashboard from "../../components/dashboard/Dashboard";
import PageBody from "../../template/PageBody";
import PageContainer from "../../template/PageContainer";

const DashboardPage = () => {
    return (
        <PageContainer pageName="Dashboard">
            <PageBody>
                <Dashboard />
            </PageBody>
        </PageContainer>
    )
}

export default DashboardPage;