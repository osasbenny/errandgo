import { useState } from 'react';
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Bell,
  Box,
  Check,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  ClipboardList,
  CreditCard,
  Clock3,
  Compass,
  FileCheck2,
  Filter,
  Heart,
  MapPin,
  Menu,
  MessageCircle,
  PackageCheck,
  Search,
  Settings2,
  SlidersHorizontal,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  UserRoundCheck,
  Users,
  WalletCards,
  X,
} from 'lucide-react';

type AppView = 'home' | 'dashboard' | 'admin';

const categories = [
  { label: 'Pick-up & delivery', icon: PackageCheck, tint: 'mint' },
  { label: 'Shopping & groceries', icon: ShoppingBag, tint: 'sand' },
  { label: 'Documents & parcels', icon: ClipboardList, tint: 'blue' },
  { label: 'Food & essentials', icon: Box, tint: 'peach' },
];

const errands = [
  { title: 'Pick up my prescription', place: 'Yaba', price: '₦2,500', time: 'Today, 2:30 PM', icon: PackageCheck, status: 'Awaiting a runner' },
  { title: 'Deliver documents to the office', place: 'Lekki Phase 1', price: '₦4,000', time: 'Tomorrow, 9:00 AM', icon: ClipboardList, status: 'Runner assigned' },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="brand-mark-wrap">
      <span className={`brand-mark ${light ? 'brand-mark-light' : ''}`}><ArrowUpRight size={18} strokeWidth={2.8} /></span>
      <span className={`brand-word ${light ? 'brand-word-light' : ''}`}>errand<span>go</span></span>
    </div>
  );
}

function App() {
  const [view, setView] = useState<AppView>('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [toast, setToast] = useState('');

  const showToast = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(''), 3000);
  };

  const openDashboard = () => {
    setView('dashboard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openAdmin = () => {
    setView('admin');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (view === 'dashboard') {
    return (
      <Dashboard onBack={() => setView('home')} onAdmin={openAdmin} onCreate={() => setModalOpen(true)} onToast={showToast} />
    );
  }

  if (view === 'admin') {
    return <AdminCenter onBack={() => setView('dashboard')} onToast={showToast} />;
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="logo-link" href="#top" aria-label="ErrandGo home"><Logo /></a>
        <nav className={`main-nav ${menuOpen ? 'main-nav-open' : ''}`}>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#errands" onClick={() => setMenuOpen(false)}>What we do</a>
          <a href="#safety" onClick={() => setMenuOpen(false)}>Safety</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQs</a>
        </nav>
        <div className="header-actions">
          <button className="text-button" onClick={openDashboard}>Sign in</button>
          <button className="button button-dark header-cta" onClick={() => setModalOpen(true)}>Create an errand <ArrowRight size={16} /></button>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> Lagos, your errands are handled</div>
            <h1>Good people.<br /><em>Real help.</em><br />Right when you need it.</h1>
            <p className="hero-lede">From a quick pickup to the little things that keep your day moving, ErrandGo connects you with trusted local help around Lagos.</p>
            <div className="hero-actions">
              <button className="button button-primary button-large" onClick={() => setModalOpen(true)}>Create an errand <ArrowUpRight size={18} /></button>
              <a className="play-link" href="#how-it-works"><span className="play-icon"><Sparkles size={15} /></span> See how it works</a>
            </div>
            <div className="trust-row"><div className="avatar-stack"><span>EO</span><span>DA</span><span>MK</span><span>+</span></div><div><div className="stars">★★★★★ <strong>4.9</strong></div><p>Loved by people across Lagos</p></div></div>
          </div>
          <div className="hero-art" aria-label="ErrandGo service preview">
            <div className="hero-glow" />
            <div className="location-pill"><MapPin size={14} /> Around Yaba, Lagos <ChevronDown size={14} /></div>
            <div className="floating-card floating-card-top"><span className="small-icon mint-icon"><ShieldCheck size={17} /></span><span><strong>Verified people</strong><small>Checked before they help</small></span><BadgeCheck className="verified-icon" size={18} /></div>
            <div className="phone-card">
              <div className="phone-top"><span>9:41</span><span>● ● ▰</span></div>
              <div className="phone-welcome"><div><small>Good morning, Amara</small><h3>What can we<br /><span>help with today?</span></h3></div><span className="mini-avatar">AD</span></div>
              <div className="phone-search"><Compass size={16} /> <span>What do you need done?</span></div>
              <div className="phone-label"><span>Popular errands</span><span>See all <ArrowRight size={12} /></span></div>
              <div className="phone-categories"><div><span className="category-icon mint-icon"><PackageCheck size={18} /></span><small>Pick up</small></div><div><span className="category-icon sand-icon"><ShoppingBag size={18} /></span><small>Shop for me</small></div><div><span className="category-icon blue-icon"><ClipboardList size={18} /></span><small>Documents</small></div></div>
              <div className="phone-active"><span className="live-dot" /><div><small>Active errand</small><strong>Prescription pickup</strong><small>Runner is on the way</small></div><ChevronRight size={18} /></div>
            </div>
            <div className="floating-card floating-card-bottom"><span className="small-icon amber-icon"><Clock3 size={17} /></span><span><strong>On the way</strong><small>Estimated arrival · 18 min</small></span><span className="route-line" /></div>
          </div>
        </section>

        <section className="logo-strip"><span>Making everyday easier in</span><strong>Yaba</strong><strong>Ikoyi</strong><strong>Lekki</strong><strong>Surulere</strong><strong>VI</strong></section>

        <section className="section-pad intro-section" id="how-it-works">
          <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-dot" /> Simple by design</div><h2>Life is busy enough.<br /><em>Let us handle the rest.</em></h2></div><p>ErrandGo makes getting things done feel less like a chore. Tell us what you need, and a verified person nearby will take it from there.</p></div>
          <div className="steps-grid"><div className="step-card"><span className="step-number">01</span><span className="step-icon"><ClipboardList size={22} /></span><h3>Tell us what you need</h3><p>Share the details, location and when it needs to happen.</p></div><div className="step-card step-card-featured"><span className="step-number">02</span><span className="step-icon"><BadgeCheck size={22} /></span><h3>We match you with trust</h3><p>Every ErrandGo person is verified before they get to work.</p><span className="step-sparkle"><Sparkles size={16} /></span></div><div className="step-card"><span className="step-number">03</span><span className="step-icon"><Heart size={22} /></span><h3>Get your time back</h3><p>Track progress, chat with your helper and breathe easier.</p></div></div>
        </section>

        <section className="section-pad category-section" id="errands"><div className="section-heading compact"><div><div className="eyebrow"><span className="eyebrow-dot" /> Around your day</div><h2>Small tasks.<br /><em>Big relief.</em></h2></div><button className="outline-button" onClick={() => setModalOpen(true)}>View all errands <ArrowRight size={16} /></button></div><div className="category-grid">{categories.map(({ label, icon: Icon, tint }) => <button className="category-card" key={label} onClick={() => setModalOpen(true)}><span className={`category-large-icon ${tint}-icon`}><Icon size={24} /></span><span>{label}</span><ArrowUpRight size={17} /></button>)}</div></section>

        <section className="trust-section section-pad" id="safety"><div className="trust-visual"><div className="trust-orbit orbit-one" /><div className="trust-orbit orbit-two" /><div className="trust-badge"><ShieldCheck size={30} /><span>Verified</span></div><span className="orbit-avatar orbit-avatar-one">EO</span><span className="orbit-avatar orbit-avatar-two">DA</span><span className="orbit-avatar orbit-avatar-three">MK</span></div><div className="trust-copy"><div className="eyebrow light-eyebrow"><span className="eyebrow-dot" /> Built on trust</div><h2>Good neighbours.<br /><em>Verified every time.</em></h2><p>We believe help should feel human and safe. That is why every runner is ID-checked, reviewed and supported by a real team.</p><div className="trust-points"><div><BadgeCheck size={18} /><span><strong>Identity checked</strong><small>Know who is helping before they arrive.</small></span></div><div><MessageCircle size={18} /><span><strong>Always in touch</strong><small>Chat, updates and support from start to finish.</small></span></div></div><button className="light-button" onClick={openDashboard}>Meet the ErrandGo way <ArrowRight size={16} /></button></div></section>

        <section className="quote-section section-pad"><div className="quote-mark">“</div><blockquote>ErrandGo gave me back the part of my day I thought was already gone.</blockquote><div className="quote-person"><span className="quote-avatar">TO</span><span><strong>Tomi O.</strong><small>Customer, Lekki Phase 1</small></span></div></section>

        <section className="faq-section section-pad" id="faq"><div className="section-heading compact"><div><div className="eyebrow"><span className="eyebrow-dot" /> Questions, answered</div><h2>Good to know.</h2></div><p>Still curious? We are here to help you feel right at home.</p></div><div className="faq-grid"><details open><summary>Where does ErrandGo operate? <ChevronDown size={18} /></summary><p>We are starting in selected Lagos neighbourhoods, with more areas opening as our community grows.</p></details><details><summary>Who are the people running errands? <ChevronDown size={18} /></summary><p>Our runners are local people who have completed our identity checks and are supported by the ErrandGo team.</p></details><details><summary>Can I track my errand? <ChevronDown size={18} /></summary><p>Yes. You get clear updates from acceptance through completion, with a direct line to your runner.</p></details><details><summary>What if my plans change? <ChevronDown size={18} /></summary><p>Reach out through your errand details and our support team will help with the next best step.</p></details></div></section>

        <section className="cta-section section-pad"><div className="cta-inner"><div><div className="eyebrow light-eyebrow"><span className="eyebrow-dot" /> Your time is yours</div><h2>One less thing<br /><em>to worry about.</em></h2></div><button className="lime-button" onClick={() => setModalOpen(true)}>Create your first errand <ArrowUpRight size={18} /></button></div></section>
      </main>

      <footer className="site-footer"><div className="footer-top"><Logo light /><div className="footer-links"><a href="#how-it-works">How it works</a><a href="#errands">Errands</a><a href="#safety">Safety</a><a href="#faq">FAQs</a></div><div className="footer-social"><span>Follow along</span><button onClick={() => showToast('Social links are coming soon.')}>Instagram</button><button onClick={() => showToast('Social links are coming soon.')}>LinkedIn</button></div></div><div className="footer-bottom"><span>© 2026 ErrandGo. All rights reserved.</span><span>Designed &amp; Developed by <a href="https://cactusdigitalmedia.ng" target="_blank" rel="noreferrer">Cactus Digital Media</a></span><span>Lagos, Nigeria</span></div></footer>

      {modalOpen && <CreateErrandModal onClose={() => setModalOpen(false)} onCreated={() => { setModalOpen(false); showToast('Your errand draft is ready.'); }} />}
      {toast && <div className="toast"><Check size={17} /> {toast}</div>}
    </div>
  );
}

function Dashboard({ onBack, onAdmin, onCreate, onToast }: { onBack: () => void; onAdmin: () => void; onCreate: () => void; onToast: (message: string) => void }) {
  const [activeNav, setActiveNav] = useState('Find help');
  return <div className="dashboard-shell"><header className="dashboard-header"><button className="logo-link" onClick={onBack}><Logo /></button><div className="dashboard-mode"><span>Customer mode</span><ChevronDown size={15} /></div><button className="ops-link" onClick={onAdmin}><Settings2 size={15} /> Operations center</button><div className="dashboard-header-right"><Bell size={19} /><span className="notification-dot" /><span className="mini-avatar large-avatar">AD</span><span className="user-name">Amara D.<small>Ikeja, Lagos</small></span><ChevronDown size={15} /></div></header><div className="dashboard-layout"><aside className="dashboard-sidebar"><div className="neighbourhood"><small>YOUR NEIGHBOURHOOD</small><strong><MapPin size={16} /> Ikeja, Lagos <ChevronDown size={15} /></strong></div><small className="sidebar-label">YOUR ERRANDS</small>{['Find help', 'Active errands', 'Past errands', 'Messages', 'Wallet'].map((item) => <button key={item} className={`sidebar-link ${activeNav === item ? 'active' : ''}`} onClick={() => setActiveNav(item)}>{item === 'Find help' ? <Compass size={18} /> : item === 'Active errands' ? <Clock3 size={18} /> : item === 'Past errands' ? <ClipboardList size={18} /> : item === 'Messages' ? <MessageCircle size={18} /> : <WalletCards size={18} />}{item}{item === 'Active errands' && <span className="sidebar-count">2</span>}</button>)}<div className="sidebar-card"><ShieldCheck size={22} /><strong>Good neighbours.<br />Verified every time.</strong><p>Every helper is ID-checked before their first errand.</p></div><button className="switch-link" onClick={() => onToast('Runner mode will be available soon.')}>Become a runner <ArrowRight size={16} /></button></aside><main className="dashboard-main"><div className="dashboard-welcome"><div><div className="eyebrow"><span className="eyebrow-dot" /> CUSTOMER DESK · LAGOS</div><h1>Good morning, <em>Amara.</em></h1><p>What can we take off your plate today?</p></div><button className="button button-primary" onClick={onCreate}>Create an errand <ArrowRight size={16} /></button></div><div className="dashboard-grid"><div className="dashboard-content"><div className="location-banner"><MapPin size={18} /><div><strong>Helping around Ikeja, Lagos</strong><small>We will match you with someone nearby</small></div><button onClick={() => onToast('Location selector is ready for your next errand.')}>Change</button></div><div className="content-title-row"><div><h2>What do you need help with?</h2><p>Pick a starting point and make today lighter.</p></div><span className="dashboard-hint"><Sparkles size={15} /> Fast &amp; simple</span></div><div className="dashboard-categories">{categories.map(({ label, icon: Icon, tint }) => <button key={label} onClick={onCreate}><span className={`category-large-icon ${tint}-icon`}><Icon size={20} /></span><strong>{label}</strong><ArrowUpRight size={16} /></button>)}</div><div className="content-title-row errands-title"><div><h2>Your active errands</h2><p>Keep an eye on the things in motion.</p></div><button className="text-arrow" onClick={() => setActiveNav('Active errands')}>View all <ArrowRight size={15} /></button></div>{errands.map(({ title, place, price, time, icon: Icon, status }) => <div className="errand-row" key={title}><span className="errand-row-icon mint-icon"><Icon size={20} /></span><div className="errand-info"><div><strong>{title}</strong><span className="status-chip">{status}</span></div><small><MapPin size={13} /> {place} <span>·</span> {time}</small></div><div className="errand-price"><small>Estimated total</small><strong>{price}</strong></div><ChevronRight size={18} /></div>)}</div><aside className="dashboard-right"><div className="wallet-card"><div className="wallet-card-top"><span>This month</span><WalletCards size={20} /></div><strong>₦18,400</strong><p>Saved in time and trips</p><div className="wallet-line"><span>4 errands completed</span><span>View wallet <ArrowRight size={14} /></span></div></div><div className="around-card"><div className="around-card-heading"><div><small>AROUND YOU</small><strong>Ikeja, moving today</strong></div><span>•••</span></div><div className="map-preview"><span className="map-road road-a" /><span className="map-road road-b" /><span className="map-road road-c" /><span className="map-pin pin-one"><MapPin size={14} /></span><span className="map-label label-a">Alausa</span><span className="map-label label-b">Opebi</span></div><button onClick={() => onToast('Area selector is ready.')}>Change area <ArrowRight size={15} /></button></div><div className="support-card"><span className="support-icon"><CircleHelp size={19} /></span><div><strong>Need a hand?</strong><p>Our team is here if anything feels unclear.</p><button onClick={() => onToast('Support request started.')}>Contact support <ArrowRight size={14} /></button></div></div></aside></div></main></div></div>;
}

function AdminCenter({ onBack, onToast }: { onBack: () => void; onToast: (message: string) => void }) {
  const [activeNav, setActiveNav] = useState('Overview');
  const navItems = [
    { label: 'Overview', icon: BarChart3 },
    { label: 'Errands', icon: ClipboardList },
    { label: 'Runners', icon: UserRoundCheck },
    { label: 'Verification', icon: FileCheck2, count: '8' },
    { label: 'Payments', icon: CreditCard },
    { label: 'Disputes', icon: AlertTriangle, count: '3' },
    { label: 'Customers', icon: Users },
  ];
  const metrics = [
    { label: 'Live errands', value: '24', change: '+12.5%', icon: Activity, tone: 'green' },
    { label: 'Completed today', value: '38', change: '+8.2%', icon: PackageCheck, tone: 'blue' },
    { label: 'Gross task value', value: '₦284k', change: '+18.4%', icon: CreditCard, tone: 'sand' },
    { label: 'Needs attention', value: '11', change: '3 urgent', icon: AlertTriangle, tone: 'peach' },
  ];
  return <div className="admin-shell"><header className="admin-header"><button className="logo-link" onClick={onBack}><Logo /></button><div className="admin-title"><span>Operations center</span><small>Live workspace · Lagos pilot</small></div><div className="admin-header-actions"><span className="status-live"><i /> All systems normal</span><Bell size={18} /><span className="mini-avatar large-avatar">OD</span><span className="admin-name">Olu D.<small>Operations lead</small></span></div></header><div className="admin-layout"><aside className="admin-sidebar"><div className="admin-sidebar-label">COMMAND CENTER</div>{navItems.map(({ label, icon: Icon, count }) => <button key={label} className={`admin-nav-link ${activeNav === label ? 'active' : ''}`} onClick={() => setActiveNav(label)}><Icon size={17} />{label}{count && <span>{count}</span>}</button>)}<div className="admin-divider" /><div className="admin-sidebar-label">CONFIGURATION</div><button className="admin-nav-link" onClick={() => onToast('Platform settings are ready for configuration.')}><Settings2 size={17} />Platform settings</button><button className="admin-nav-link" onClick={() => onToast('Audit log export started.')}><Activity size={17} />Audit logs</button><button className="admin-back" onClick={onBack}><ArrowLeftIcon /> Back to customer view</button></aside><main className="admin-main"><div className="admin-welcome"><div><div className="eyebrow"><span className="eyebrow-dot" /> WEDNESDAY · 09 OCTOBER 2026</div><h1>Good morning, <em>Olu.</em></h1><p>Here is what is moving across the marketplace today.</p></div><button className="admin-filter" onClick={() => onToast('Date filter opened.')}><Filter size={15} /> Today <ChevronDown size={15} /></button></div><div className="metric-grid">{metrics.map(({ label, value, change, icon: Icon, tone }) => <div className="metric-card" key={label}><div className={`metric-icon ${tone}`}><Icon size={18} /></div><div className="metric-label">{label}<span className={tone === 'peach' ? 'warning-change' : ''}>{change}</span></div><strong>{value}</strong><small>Compared with yesterday</small></div>)}</div><div className="admin-content-grid"><section className="admin-panel queue-panel"><div className="panel-heading"><div><h2>Verification queue</h2><p>Runner profiles waiting for a review.</p></div><button onClick={() => setActiveNav('Verification')}>View queue <ArrowRight size={15} /></button></div><div className="verification-list"><div className="verification-row"><span className="runner-avatar runner-one">KA</span><div><strong>Kelechi A.</strong><small>Yaba · submitted 12 min ago</small></div><span className="review-tag">New</span><button className="row-more" onClick={() => onToast('Kelechi A. review opened.')}><ChevronRight size={17} /></button></div><div className="verification-row"><span className="runner-avatar runner-two">FO</span><div><strong>Femi O.</strong><small>Surulere · submitted 38 min ago</small></div><span className="review-tag">New</span><button className="row-more" onClick={() => onToast('Femi O. review opened.')}><ChevronRight size={17} /></button></div><div className="verification-row"><span className="runner-avatar runner-three">TI</span><div><strong>Titi I.</strong><small>Lekki Phase 1 · resubmission</small></div><span className="review-tag needs-review">Review</span><button className="row-more" onClick={() => onToast('Titi I. review opened.')}><ChevronRight size={17} /></button></div></div></section><section className="admin-panel live-panel"><div className="panel-heading"><div><h2>Marketplace pulse</h2><p>Errands moving right now.</p></div><span className="pulse-label"><i /> Live</span></div><div className="pulse-chart"><div className="chart-labels"><span>₦80k</span><span>₦60k</span><span>₦40k</span><span>₦20k</span><span>₦0</span></div><div className="chart-area"><span className="chart-line" /><span className="chart-point point-one" /><span className="chart-point point-two" /><span className="chart-point point-three" /><span className="chart-point point-four" /><span className="chart-point point-five" /></div></div><div className="chart-days"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div></section></div><section className="admin-panel errands-panel"><div className="panel-heading"><div><h2>Live errands</h2><p>Keep a close eye on active work.</p></div><div className="panel-actions"><button onClick={() => onToast('Search is ready.')}><Search size={16} /></button><button onClick={() => onToast('Filters opened.')}><SlidersHorizontal size={16} /></button><button onClick={() => setActiveNav('Errands')}>See all <ArrowRight size={15} /></button></div></div><div className="admin-table"><div className="table-header"><span>ERRAND</span><span>CUSTOMER</span><span>RUNNER</span><span>STATUS</span><span>VALUE</span><span /></div><div className="table-row"><div><span className="table-icon mint-icon"><PackageCheck size={15} /></span><span><strong>Prescription pickup</strong><small>EG-1042 · Yaba</small></span></div><span>Amara D.</span><span>—</span><span className="table-status awaiting">Awaiting runner</span><strong>₦2,500</strong><button onClick={() => onToast('Errand EG-1042 opened.')}><ChevronRight size={16} /></button></div><div className="table-row"><div><span className="table-icon blue-icon"><ClipboardList size={15} /></span><span><strong>Office documents</strong><small>EG-1041 · Lekki Phase 1</small></span></div><span>Tomi O.</span><span>Daniel A.</span><span className="table-status progress">In progress</span><strong>₦4,000</strong><button onClick={() => onToast('Errand EG-1041 opened.')}><ChevronRight size={16} /></button></div><div className="table-row"><div><span className="table-icon sand-icon"><ShoppingBag size={15} /></span><span><strong>Market shopping</strong><small>EG-1038 · Ikeja</small></span></div><span>Chika N.</span><span>Femi O.</span><span className="table-status completed">Completed</span><strong>₦6,500</strong><button onClick={() => onToast('Errand EG-1038 opened.')}><ChevronRight size={16} /></button></div></div></section><section className="admin-bottom-grid"><div className="admin-panel activity-panel"><div className="panel-heading"><div><h2>Recent activity</h2><p>Actions across your team.</p></div><button onClick={() => onToast('Audit log opened.')}>Open audit log <ArrowRight size={15} /></button></div><div className="activity-item"><span className="activity-dot green-dot" /><div><strong>Runner approved</strong><p>Amaka E. was approved by Kemi O.</p></div><small>8 min</small></div><div className="activity-item"><span className="activity-dot amber-dot" /><div><strong>Payout held</strong><p>EG-1036 was flagged for customer confirmation.</p></div><small>24 min</small></div><div className="activity-item"><span className="activity-dot blue-dot" /><div><strong>New errand posted</strong><p>Food pickup request opened in Ikeja.</p></div><small>41 min</small></div></div><div className="admin-panel alert-panel"><div className="panel-heading"><div><h2>Needs attention</h2><p>Small things worth seeing early.</p></div><AlertTriangle size={18} className="alert-heading-icon" /></div><div className="attention-item"><span className="attention-icon amber-icon"><CreditCard size={15} /></span><div><strong>2 failed payments</strong><small>Review before assignment</small></div><ChevronRight size={16} /></div><div className="attention-item"><span className="attention-icon peach-icon"><MessageCircle size={15} /></span><div><strong>3 open disputes</strong><small>Oldest is 2 hours old</small></div><ChevronRight size={16} /></div></div></section></main></div></div>;
}

function ArrowLeftIcon() {
  return <ArrowRight size={15} style={{ transform: 'rotate(180deg)' }} />;
}

function CreateErrandModal({ onClose, onCreated }: { onClose: () => void; onCreated: () => void }) {
  const [step, setStep] = useState(1);
  return <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}><div className="modal-card" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div className="modal-header"><div><span className="eyebrow"><span className="eyebrow-dot" /> {step === 1 ? 'A little more detail' : 'Almost there'}</span><h2 id="modal-title">{step === 1 ? 'What can we help with?' : 'Where should we start?'}</h2></div><button className="close-button" onClick={onClose} aria-label="Close"><X size={20} /></button></div>{step === 1 ? <><p className="modal-intro">Choose the closest fit. You can add all the important details next.</p><div className="modal-options">{categories.map(({ label, icon: Icon, tint }) => <button key={label} onClick={() => setStep(2)}><span className={`category-large-icon ${tint}-icon`}><Icon size={20} /></span><span><strong>{label}</strong><small>Get a trusted local helper</small></span><ChevronRight size={18} /></button>)}</div></> : <><p className="modal-intro">We will use this to find the right person near you.</p><label className="field-label">Your area<input defaultValue="Ikeja, Lagos" /></label><label className="field-label">Tell us a little more<textarea placeholder="For example: pick up my prescription from..." rows={4} /></label><button className="button button-primary full-button" onClick={onCreated}>Save errand details <ArrowRight size={16} /></button><button className="back-button" onClick={() => setStep(1)}>Back to categories</button></>}</div></div>;
}

export default App;
