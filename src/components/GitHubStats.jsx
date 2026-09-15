import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, Star, GitFork, Users, BookOpen, Search, 
  Code, Loader2, Sparkles, Terminal, Activity, FileCode, ArrowUpRight
} from 'lucide-react';

export const GitHubStats = ({ lang }) => {
  const [username, setUsername] = useState('salmanameer2');
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [totalStars, setTotalStars] = useState(0);

  const fetchGitHubData = async (userToFetch) => {
    if (!userToFetch.trim()) return;
    setLoading(true);
    setError(null);
    try {
      // Fetch user profile
      const profileRes = await fetch(`https://api.github.com/users/${userToFetch}`);
      if (!profileRes.ok) {
        if (profileRes.status === 404) {
          throw new Error(lang === 'ur' ? 'صارف نہیں ملا!' : lang === 'ar' ? 'المستخدم غير موجود!' : 'GitHub user not found!');
        } else if (profileRes.status === 403) {
          throw new Error(lang === 'ur' ? 'API کی حد ختم ہو گئی!' : lang === 'ar' ? 'تجاوز حد API!' : 'GitHub API rate limit exceeded! Please try again later.');
        } else {
          throw new Error('Failed to fetch profile.');
        }
      }
      const profileData = await profileRes.json();
      setProfile(profileData);

      // Fetch user repos (up to 100)
      const reposRes = await fetch(`https://api.github.com/users/${userToFetch}/repos?per_page=100&sort=updated`);
      if (!reposRes.ok) {
        if (reposRes.status === 403) {
          throw new Error(lang === 'ur' ? 'API کی حد ختم ہو گئی!' : lang === 'ar' ? 'تجاوز حد API!' : 'GitHub API rate limit exceeded! Please try again later.');
        } else {
          throw new Error('Failed to fetch repositories.');
        }
      }
      const reposData = await reposRes.json();
      setRepos(reposData);

      // Calculate total stars
      const stars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0);
      setTotalStars(stars);

      // Calculate language breakdown
      const langCounts = {};
      let totalLangRepos = 0;
      reposData.forEach(repo => {
        if (repo.language) {
          langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
          totalLangRepos++;
        }
      });

      const sortedLangs = Object.entries(langCounts)
        .map(([name, count]) => ({
          name,
          count,
          percentage: totalLangRepos > 0 ? Math.round((count / totalLangRepos) * 100) : 0
        }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5); // top 5 languages

      setLanguages(sortedLangs);
    } catch (err) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubData(username);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setUsername(searchInput.trim());
      fetchGitHubData(searchInput.trim());
    }
  };

  // Select top 4 repos sorted by stars, then forks, then name
  const topRepos = [...repos]
    .sort((a, b) => b.stargazers_count - a.stargazers_count || b.forks_count - a.forks_count)
    .slice(0, 4);

  const formatText = {
    title: lang === 'en' ? 'Live GitHub Analytics' : lang === 'ur' ? 'لائیو گٹ ہب تجزیات' : 'تحليلات GitHub الحية',
    subtitle: lang === 'en' ? 'Syncing real-time statistics directly from GitHub developer APIs' : lang === 'ur' ? 'گٹ ہب ڈویلپر APIs سے براہ راست لائیو ڈیٹا سنکرونائز کریں' : 'مزامنة الإحصاءات الحية مباشرة من واجهات برمجة تطبيقات مطور GitHub',
    searchPlaceholder: lang === 'en' ? 'Enter GitHub username...' : lang === 'ur' ? 'گٹ ہب صارف نام لکھیں...' : 'أدخل اسم مستخدم GitHub...',
    followers: lang === 'en' ? 'Followers' : lang === 'ur' ? 'فالوورز' : 'المتابعون',
    following: lang === 'en' ? 'Following' : lang === 'ur' ? 'فالونگ' : 'المتابَعون',
    repositories: lang === 'en' ? 'Public Repos' : lang === 'ur' ? 'پبلک کوڈ ہاؤس' : 'المستودعات العامة',
    totalStars: lang === 'en' ? 'Stars Earned' : lang === 'ur' ? 'حاصل کردہ ستارے' : 'النجوم المكتسبة',
    topReposTitle: lang === 'en' ? 'Top Featured Repositories' : lang === 'ur' ? 'نمایاں ترین کوڈ مخازن' : 'أبرز المستودعات العامة',
    languagesTitle: lang === 'en' ? 'Tech Stacks & Languages' : lang === 'ur' ? 'استعمال شدہ پروگرامنگ زبانیں' : 'لغات البرمجة الأكثر استخداماً',
    viewOnGithub: lang === 'en' ? 'View Profile' : lang === 'ur' ? 'پروفائل دیکھیں' : 'عرض الملف الشخصي',
    loadingText: lang === 'en' ? 'Fetching live repository frames...' : lang === 'ur' ? 'لائیو گٹ ہب ڈیٹا حاصل کیا جا رہا ہے...' : 'جاري جلب بيانات المستودعات الحية...',
    noBio: lang === 'en' ? 'This developer has not set a bio yet.' : lang === 'ur' ? 'اس ڈویلپر نے ابھی تک کوئی بائیو درج نہیں کیا۔' : 'لم يقم هذا المطور بكتابة نبذة شخصية بعد.',
    activeState: lang === 'en' ? 'ACTIVE APIS: api.github.com' : lang === 'ur' ? 'فعال سرور: api.github.com' : 'الخوادم النشطة: api.github.com'
  };

  return (
    <section id="github-stats" className="space-y-12 relative">
      <div className="absolute inset-0 bg-radial-gradient from-brand-primary/5 via-transparent to-transparent -z-10 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center space-y-3">
        <span className="font-mono text-xs text-brand-primary tracking-widest uppercase block">
          {lang === 'en' ? 'OPEN SOURCE CONTRIBUTION' : lang === 'ur' ? 'اوپن سورس شراکتیں' : 'المساهمة المفتوحة المصدر'}
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-brand-on-surface">
          {formatText.title}
        </h2>
        <p className="font-sans text-xs md:text-sm text-brand-on-surface-variant max-w-xl mx-auto leading-relaxed">
          {formatText.subtitle}
        </p>
        <div className="h-1 w-20 bg-brand-primary mx-auto rounded-full"></div>
      </div>

      {/* Interactive Search Tool */}
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSearchSubmit} className="relative flex gap-2">
          <div className="relative flex-1">
            <span className="absolute inset-y-0 left-3.5 flex items-center text-brand-on-surface-variant/70">
              <Github className="w-4 h-4" />
            </span>
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder={formatText.searchPlaceholder}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface-container/30 border border-brand-outline-variant/50 text-brand-on-surface font-mono text-xs focus:outline-none focus:border-brand-primary/60 placeholder:text-brand-on-surface-variant/40 transition-colors"
            />
          </div>
          <motion.button
            whileHover={searchInput.trim() ? { scale: 1.03 } : {}}
            whileTap={searchInput.trim() ? { scale: 0.97 } : {}}
            type="submit"
            disabled={!searchInput.trim()}
            className="px-4 py-2.5 rounded-xl bg-brand-primary text-surface-base font-mono font-bold text-xs flex items-center gap-2 hover:bg-brand-primary-dim transition-colors cursor-pointer disabled:opacity-55 disabled:cursor-not-allowed"
          >
            <Search className="w-3.5 h-3.5" />
            {lang === 'en' ? 'Query' : lang === 'ur' ? 'تلاش' : 'استعلام'}
          </motion.button>
        </form>
        <div className="mt-2.5 text-center flex items-center justify-center gap-1.5 font-mono text-[9px] text-brand-on-surface-variant/50">
          <Terminal className="w-3 h-3 text-brand-primary/60" />
          <span>{formatText.activeState}</span>
        </div>
      </div>

      {/* Main Analytics Render Container */}
      <div className="min-h-[350px] relative">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loading-frame"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-4 py-12"
            >
              <div className="relative flex items-center justify-center">
                <Loader2 className="w-10 h-10 text-brand-primary animate-spin" />
                <Activity className="w-4 h-4 text-brand-primary absolute animate-pulse" />
              </div>
              <p className="font-mono text-xs text-brand-on-surface-variant animate-pulse">
                {formatText.loadingText}
              </p>
            </motion.div>
          ) : error ? (
            <motion.div
              key="error-frame"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-md mx-auto text-center py-12 px-6 rounded-2xl glass border border-red-500/10 bg-red-500/5 space-y-4"
            >
              <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mx-auto">
                <Terminal className="w-6 h-6 text-red-400" />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-display font-bold text-sm text-red-200">
                  {lang === 'en' ? 'Query Interrupted' : lang === 'ur' ? 'تلاش میں رکاوٹ' : 'تمت مقاطعة الاستعلام'}
                </h4>
                <p className="font-sans text-xs text-brand-on-surface-variant leading-relaxed">
                  {error}
                </p>
              </div>
              <button
                onClick={() => {
                  setUsername('salmanameer2');
                  fetchGitHubData('salmanameer2');
                  setSearchInput('');
                }}
                className="font-mono text-[10px] text-brand-primary hover:underline"
              >
                {lang === 'en' ? 'Reset to primary engineer profile' : lang === 'ur' ? 'پرائمری پروفائل پر واپس جائیں' : 'الرجوع للملف التعريفي للمهندس'}
              </button>
            </motion.div>
          ) : profile ? (
            <motion.div
              key="stats-layout"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            >
              
              {/* LEFT COLUMN: Profile Info & Language Stats */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* Profile Card */}
                <div className="glass p-6 rounded-2xl border border-white/5 bg-surface-container/20 flex flex-col items-center text-center space-y-4 group relative overflow-hidden">
                  <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  
                  {/* Avatar */}
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-brand-primary to-brand-secondary opacity-50 blur group-hover:opacity-70 transition-opacity" />
                    <img
                      src={profile.avatar_url}
                      alt={profile.name || profile.login}
                      referrerPolicy="no-referrer"
                      className="w-20 h-20 rounded-full relative border-2 border-white/10 object-cover"
                    />
                  </div>

                  {/* Name and Handle */}
                  <div className="space-y-1">
                    <h3 className="font-display font-extrabold text-lg text-brand-on-surface flex items-center justify-center gap-1.5 group-hover:text-brand-primary transition-colors">
                      {profile.name || profile.login}
                    </h3>
                    <p className="font-mono text-xs text-brand-primary/80">@{profile.login}</p>
                  </div>

                  {/* Bio */}
                  <p className="font-sans text-xs text-brand-on-surface-variant leading-relaxed max-w-xs">
                    {profile.bio || formatText.noBio}
                  </p>

                  {/* Location / Meta */}
                  {profile.location && (
                    <div className="font-mono text-[10px] text-brand-on-surface-variant/60 flex items-center gap-1">
                      <Terminal className="w-3 h-3 text-brand-primary/50" />
                      <span>{profile.location}</span>
                    </div>
                  )}

                  {/* Button to Github */}
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={profile.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 rounded-xl bg-white/5 hover:bg-brand-primary/10 border border-white/5 hover:border-brand-primary/20 font-mono text-[11px] font-bold text-brand-on-surface flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    {formatText.viewOnGithub}
                    <ArrowUpRight className="w-3 h-3" />
                  </motion.a>
                </div>

                {/* Micro Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: formatText.repositories, value: profile.public_repos, icon: BookOpen, color: 'text-indigo-400' },
                    { label: formatText.totalStars, value: totalStars, icon: Star, color: 'text-amber-400' },
                    { label: formatText.followers, value: profile.followers, icon: Users, color: 'text-pink-400' },
                    { label: formatText.following, value: profile.following, icon: Sparkles, color: 'text-teal-400' }
                  ].map((stat, idx) => (
                    <div key={idx} className="glass p-4 rounded-xl border border-white/5 bg-surface-container/10 flex flex-col justify-between group hover:border-white/10 transition-colors">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="font-mono text-[10px] text-brand-on-surface-variant/60 tracking-wider uppercase">{stat.label}</span>
                        <stat.icon className={`w-4 h-4 ${stat.color} group-hover:scale-110 transition-transform`} />
                      </div>
                      <span className="font-display font-black text-xl text-brand-on-surface">{stat.value}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* RIGHT COLUMN: Repository Deck & Languages */}
              <div className="lg:col-span-8 space-y-6">
                
                {/* Languages card */}
                <div className="glass p-6 rounded-2xl border border-white/5 bg-surface-container/20 space-y-5">
                  <div className="flex items-center gap-2 border-b border-white/5 pb-3">
                    <Code className="w-4 h-4 text-brand-primary" />
                    <h3 className="font-display font-bold text-sm text-brand-on-surface tracking-wide uppercase">
                      {formatText.languagesTitle}
                    </h3>
                  </div>
                  {languages.length > 0 ? (
                    <div className="space-y-4">
                      {languages.map((langData, idx) => (
                        <div key={idx} className="space-y-1.5">
                          <div className="flex justify-between font-mono text-[11px]">
                            <span className="text-brand-on-surface-variant flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                              {langData.name}
                            </span>
                            <span className="text-brand-primary font-bold">{langData.percentage}%</span>
                          </div>
                          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${langData.percentage}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, ease: 'easeOut', delay: idx * 0.1 }}
                              className="h-full rounded-full bg-gradient-to-r from-brand-primary to-brand-primary-dim"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="py-6 text-center">
                      <p className="font-mono text-xs text-brand-on-surface-variant/50">
                        {lang === 'en' ? 'No linguistic footprints found' : lang === 'ur' ? 'کوئی زبان کا ریکارڈ نہیں ملا' : 'لم يتم العثور على بيانات لغات البرمجة'}
                      </p>
                    </div>
                  )}
                </div>

                {/* Repos Grid */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                    <FileCode className="w-4 h-4 text-brand-primary" />
                    <h3 className="font-display font-bold text-sm text-brand-on-surface tracking-wide uppercase">
                      {formatText.topReposTitle}
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {topRepos.map((repo, index) => (
                      <motion.div
                        key={repo.id}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -4, borderColor: 'rgba(0, 218, 243, 0.25)' }}
                        className="glass p-5 rounded-xl border border-white/5 bg-surface-container/10 flex flex-col justify-between gap-4 group transition-all duration-300"
                      >
                        <div className="space-y-2">
                          <div className="flex justify-between items-start">
                            <h4 className="font-display font-bold text-sm text-brand-on-surface group-hover:text-brand-primary transition-colors truncate max-w-[80%]">
                              {repo.name}
                            </h4>
                            <a
                              href={repo.html_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-brand-on-surface-variant/40 hover:text-brand-primary transition-colors"
                            >
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                          </div>
                          <p className="font-sans text-xs text-brand-on-surface-variant line-clamp-2 leading-relaxed min-h-[32px]">
                            {repo.description || (lang === 'en' ? 'No sandbox descriptors found.' : lang === 'ur' ? 'کوئی تفصیل نہیں ملی۔' : 'لا يوجد وصف للمستودع.')}
                          </p>
                        </div>

                        <div className="flex justify-between items-center pt-2 border-t border-white/5 font-mono text-[10px]">
                          {repo.language ? (
                            <span className="text-brand-primary/80 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                              {repo.language}
                            </span>
                          ) : (
                            <span className="text-brand-on-surface-variant/40">-</span>
                          )}
                          <div className="flex items-center gap-3 text-brand-on-surface-variant/70">
                            <span className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-amber-400" />
                              {repo.stargazers_count}
                            </span>
                            <span className="flex items-center gap-1">
                              <GitFork className="w-3 h-3 text-indigo-400" />
                              {repo.forks_count}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

              </div>

            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

    </section>
  );
};
