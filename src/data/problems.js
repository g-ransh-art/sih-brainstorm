const p = (id, sector, problem, workflow, tech) => ({
  id,
  sector,
  problem,
  workflow,
  tech
});

export const sectors = [
  'Healthcare',
  'Agriculture',
  'Legal/Justice',
  'Urban Infrastructure',
  'Education',
  'Disaster Management',
  'Railways',
  'Cybersecurity',
  'Logistics/Supply Chain',
  'Environment',
  'Governance'
];

export const problems = [
  p('H1', 'Healthcare', 'PHC referrals arrive with no pre-information or bed reservation', 'Handwritten slip + phone call', 'REST API to hospital HIS + bed tracking'),
  p('H2', 'Healthcare', 'Medicine stock-outs at PHCs discovered weeks late via paper registers', 'Monthly paper stock registers', 'Mobile threshold-based alert + Aushadhi API'),
  p('H3', 'Healthcare', 'ASHA worker field data reaches NHM 2 weeks late', 'Paper forms → weekly batch → manual entry', 'Offline voice-first data entry app'),
  p('H4', 'Healthcare', 'Vaccine cold chain breaks logged on paper, discovered late', 'Paper temperature log', 'IoT temperature sensor + tamper-proof digital log'),
  p('H5', 'Healthcare', 'No structured early identification for youth mental distress', 'Teacher intuition + referral', 'Validated screening tool for non-specialists'),
  p('H6', 'Healthcare', 'High-risk pregnancies not flagged early in rural areas', 'ANM paper registers, subjective risk', 'ML risk scoring + ASHA app + SMS alert'),
  p('H7', 'Healthcare', 'No real-time bed availability across district hospitals during emergencies', 'Phone calls between hospitals', 'Real-time multi-hospital bed board + routing'),
  p('H8', 'Healthcare', 'Biomedical equipment at PHCs sits unrepaired for months', 'Phone complaint, manual repair visit', 'Maintenance ticketing + SLA tracker + AMC'),

  p('A1', 'Agriculture', 'Crop insurance claim verification bottleneck at patwari field visits', 'Paper/CSC claim → patwari visits field', 'Satellite NDVI damage assessment + exception handling'),
  p('A2', 'Agriculture', 'No supply arrival visibility at mandis — price crashes', 'Informal farmer-trader phone network', 'Arrival forecasting using historical + satellite acreage'),
  p('A3', 'Agriculture', 'Fake certified seed certificates sold to farmers', 'Paper certificate with hologram', 'QR-coded seed lot registry + point-of-sale verification'),
  p('A4', 'Agriculture', 'Canal water distribution inequitable; downstream farmers lose', 'Manual gate operation', 'Automated gate monitoring + consumption metering'),
  p('A5', 'Agriculture', 'FPOs lack inventory management — high post-harvest losses', 'Paper ledger', 'Simple FPO produce aggregation + tracking app'),
  p('A6', 'Agriculture', 'Post-flood damage assessment takes weeks, farmers miss compensation', 'Patwari manual field survey', 'Satellite damage mapping + mobile confirmation'),

  p('J1', 'Legal/Justice', 'Undertrials miss court dates due to manual transport coordination', 'Physical court notice → prison transport', 'eCourts + prison transport integration + reminders'),
  p('J2', 'Legal/Justice', 'Complainants have no FIR investigation status; IOs miss deadlines', 'Phone calls/police visits', 'Citizen-facing FIR tracker + IO deadline reminders'),
  p('J3', 'Legal/Justice', 'Free legal aid assignment is manual, untracked', 'DLSA clerk manually matches advocates', 'Legal aid assignment + case tracking + performance analytics'),
  p('J4', 'Legal/Justice', 'RTI applicants get no deadline enforcement or push notifications', 'Manual tracking via RTI portal', 'Automated deadline escalation + push notifications'),
  p('J5', 'Legal/Justice', 'Vendor payments to MSMEs delayed 90–180 days', 'Invoice → manual approvals → PAO → bank', 'Vendor-facing invoice tracker + SLA auto-escalation'),

  p('U1', 'Urban Infrastructure', 'Pothole complaints enter portal but never route or verify closure', '311 app → inbox → manual assignment', 'Auto-routing + CV repair verification + warranty trigger'),
  p('U2', 'Urban Infrastructure', 'Buildings deviate from sanctioned plans, detected only on collapse', 'Manual inspection', 'Drone imagery + sanctioned plan overlay + deviation alert'),
  p('U3', 'Urban Infrastructure', 'Property tax under-assessment due to self-declared property sizes', 'Self-assessment + manual survey', 'Satellite imagery building footprint + tax reconciliation'),
  p('U4', 'Urban Infrastructure', 'Sewer blockages discovered reactively after overflow', 'Citizen complaint → cleaning crew', 'Predictive blockage model using history + rainfall'),
  p('U5', 'Urban Infrastructure', 'Street light outages unreported for weeks', 'Citizen complaint → dispatch', 'IoT current sensor + fault detection + geo-routed repair'),
  p('U6', 'Urban Infrastructure', 'Unauthorized water connections cause 30–50% non-revenue water', 'Manual surveys + tip-offs', 'Flow anomaly detection in DMAs + inspector dispatch'),

  p('E1', 'Education', 'Teacher transfers driven by politics rather than school needs', 'Manual requests + political recommendations', 'Data-driven allocation optimizer + public dashboard'),
  p('E2', 'Education', 'Mid-day meal ghost beneficiaries inflate numbers', 'Headmaster manual register', 'Geofenced biometric verification + anomaly detection'),
  p('E3', 'Education', 'Scholarships credited to bank but not confirmed as received by student', 'NSP → PFMS → bank', 'Student confirmation loop + ML anomaly detection'),
  p('E4', 'Education', 'College affiliation compliance is self-reported annually', 'College submits compliance report', 'Continuous monitoring with AISHE data + student feedback + photos'),
  p('E5', 'Education', 'College placement data self-reported and inflated', 'College submits to NIRF/NAAC', 'Employer confirmation workflow + verified placement card'),

  p('D1', 'Disaster Management', 'Cyclone/flood warnings not verified at last mile', 'IMD → WhatsApp forward → community', 'Acknowledgment loop + escalation + NDRF positioning'),
  p('D2', 'Disaster Management', 'Relief camps suffer supply mismatch, no real-time inventory', 'Manual per-camp inventory via phone', 'Multi-camp inventory dashboard + demand prediction + routing'),
  p('D3', 'Disaster Management', 'Post-flood damage assessment slow due to patwari field visits', 'Paper survey', 'Satellite SAR damage mapping + field confirmation'),
  p('D4', 'Disaster Management', 'Volunteers arrive uncoordinated during disasters', 'Phone calls between NGOs', 'Volunteer registration + skill mapping + geofenced deployment'),

  p('R1', 'Railways', 'No dynamic coach-level load visibility in unreserved trains', 'Visual guard check', 'Coach occupancy display + crowd-flow guidance'),
  p('R2', 'Railways', 'Unmanned level crossing coordination via phone calls can fail', 'Phone call between stationmaster and gateman', 'Automated gate closure with train approach detection + fail-safe override'),
  p('R3', 'Railways', 'Parcels on passenger trains not trackable after station handover', 'Counter receipt + phone calls', 'QR scan + station handover log + receiver SMS'),
  p('R4', 'Railways', 'Coach defects found only after breakdown', 'Visual inspection, complaint-based', 'Vibration-based predictive coach health monitoring'),

  p('C1', 'Cybersecurity', 'SIM swap fraud: banks not notified when SIM is swapped', 'Telecom calls registered number', 'Telecom-bank API bridge + transaction freeze cooling window'),
  p('C2', 'Cybersecurity', 'No fast Indian takedown for social media impersonation', 'Report to platform → weeks', 'Automated impersonation detection + one-click CERT-In pipeline'),
  p('C3', 'Cybersecurity', 'India-specific phishing URLs undetected, especially in regional languages', 'Global blacklists', 'Indic NLP + visual brand similarity + CERT-In feed'),
  p('C4', 'Cybersecurity', 'Fake biometric devices spoof Aadhaar authentication', 'Live biometric + UIDAI auth', 'Liveness detection middleware for authentication endpoints'),

  p('L1', 'Logistics/Supply Chain', 'Overloaded trucks pass weighbridges via corruption, destroying roads', 'Manual weighbridge + inspector', 'Automated weigh-in-motion + e-challan + court integration'),
  p('L2', 'Logistics/Supply Chain', 'PDS grain quantity diverted; Aadhaar only verifies identity not quantity', 'Dealer scoops grain after biometric auth', 'FPS load cell quantity verification + beneficiary SMS receipt'),
  p('L3', 'Logistics/Supply Chain', 'Containers at minor ports sit unseen; demurrage piles up', 'Phone calls to customs broker', 'Container milestone push notifications + ICEGATE API'),
  p('L4', 'Logistics/Supply Chain', 'School textbooks diverted, students get books months late', 'Paper delivery receipts', 'QR chain-of-custody from warehouse to student'),

  p('Env1', 'Environment', 'Industries manipulate OCEMS sensors; real effluent violations invisible', 'Self-reported + sensor data', 'Tamper-evident log + downstream water quality anomaly detection'),
  p('Env2', 'Environment', 'Forest fire alerts reach ranger 6–8 hours after fire start', 'FIRMS download → forest dept phone call', 'Automated FIRMS polling + ranger-direct SMS + route to fire'),
  p('Env3', 'Environment', 'Groundwater measured quarterly only, too infrequent', 'Manual dip meter measurement', 'IoT piezometer network + over-extraction alert'),
  p('Env4', 'Environment', 'E-waste not tracked to certified recyclers; EPR is honor system', 'Annual EPR certificate self-report', 'QR chain-of-custody producer → collector → recycler + EPR credit'),

  p('G1', 'Governance', 'Inter-department file movement invisible; approvals take months', 'Physical file movement', 'QR file tracking + SLA engine + citizen portal'),
  p('G2', 'Governance', 'MGNREGS ghost worker attendance inflates payroll', 'Paper muster roll', 'Geo-tagged biometric attendance at worksite + PFMS integration'),
  p('G3', 'Governance', 'GP funds spent without real-time work verification', 'Annual audit after expense', 'Geo-tagged work photos + citizen verification + collector dashboard'),
  p('G4', 'Governance', 'Jail overcrowding; bail/parole eligibility tracking manual', 'Paper registers', 'Prison population analytics + bail eligibility algorithm + court integration'),
  p('G5', 'Governance', 'Death certificate requires 5–7 office visits for inheritance', 'Manual sequential visits', 'Event-driven death workflow across departments + family dashboard')
];