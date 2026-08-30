import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import Landing from './pages/Landing'
import AgentsPage from './pages/AgentsPage'
import AgentDetail from './pages/AgentDetail'
import AlertsPage from './pages/AlertsPage'
import CompliancePage from './pages/CompliancePage'
import OrchestrationPage from './pages/OrchestrationPage'
import McpsPage from './pages/McpsPage'
import PluginsPage from './pages/PluginsPage'
import OrbMarketplace from './pages/OrbMarketplace'
import VoiceTelPage from './pages/VoiceTelPage'
import { AppShell } from './components/AppShell'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/marketplace" element={<OrbMarketplace />} />
        <Route path="/app" element={<AppShell />}>
          <Route index element={<Dashboard />} />
          <Route path="agents" element={<AgentsPage />} />
          <Route path="agents/:id" element={<AgentDetail />} />
          <Route path="alerts" element={<AlertsPage />} />
          <Route path="compliance" element={<CompliancePage />} />
          <Route path="orchestration" element={<OrchestrationPage />} />
          <Route path="mcps" element={<McpsPage />} />
          <Route path="plugins" element={<PluginsPage />} />
          <Route path="marketplace" element={<OrbMarketplace />} />
          <Route path="voice" element={<VoiceTelPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
