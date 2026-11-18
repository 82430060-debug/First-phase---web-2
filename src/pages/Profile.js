import React from 'react';
import '../Styles/Profile.css';

function Profile() {
    return (
        <div className='profile-page'>
            <div className='profile-container'>
                <div className='profile-hero'>
                    <div className='profile-banner'></div>
                    <div className='profile-hero-body'>
                        <div className='profile-identity'>
                            <div className='profile-avatar'>🦉</div>
                            <div className='profile-info'>
                                <h1 className='profile-name'>Any Name</h1>
                                <div className='profile-username'>@anyname</div>
                                <div className='profile-joined'>Joined November 2026</div>
                            </div>
                        </div>

                        <button className='btn-edit-profile'>Edit Profile</button>
                    </div>
                </div>

                <div>
                    <h2 className='section-title'>Statistics</h2>
                    <div className='stats-grid'>
                        <div className='stat-card'>
                            <div className='stat-icon streak'>🔥</div>
                            <div>
                                <div className='stat-value'>12 Days</div>
                                <div className='stat-label'>Day Streak</div>
                            </div>
                        </div>

                        <div className='stat-card'>
                            <div className='stat-icon xp'>⚡</div>
                            <div>
                                <div className='stat-value'>1,450 XP</div>
                                <div className='stat-label'>Total XP</div>
                            </div>
                        </div>

                        <div className='stat-card'>
                            <div className='stat-icon league'>🏆</div>
                            <div>
                                <div className='stat-value'>Sapphire</div>
                                <div className='stat-label'>Current League</div>
                            </div>
                        </div>

                        <div className='stat-card'>
                            <div className='stat-icon accuracy'>🎯</div>
                            <div>
                                <div className='stat-value'>92%</div>
                                <div className='stat-label'>Quiz Accuracy</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='languages-card'>
                    <h2 className='section-title'>My Languages</h2>
                    <div className='language-list'>
                        <div className='language-item'>
                            <div className='language-flag'>🇩🇪</div>
                            <div className='language-details'>
                                <div className='language-top'>
                                    <span className='language-name'>German</span>
                                    <span className='language-xp'>650 XP • Level 4</span>
                                </div>
                                <div className='language-bar-track'>
                                    <div className='language-bar-fill' style={{ width: '70%' }}></div>
                                </div>
                            </div>
                        </div>

                        <div className='language-item'>
                            <div className='language-flag'>🇱🇧</div>
                            <div className='language-details'>
                                <div className='language-top'>
                                    <span className='language-name'>Arabic</span>
                                    <span className='language-xp'>480 XP • Level 3</span>
                                </div>
                                <div className='language-bar-track'>
                                    <div className='language-bar-fill violet' style={{ width: '50%' }}></div>
                                </div>
                            </div>
                        </div>

                        <div className='language-item'>
                            <div className='language-flag'>🇬🇧</div>
                            <div className='language-details'>
                                <div className='language-top'>
                                    <span className='language-name'>English</span>
                                    <span className='language-xp'>320 XP • Level 2</span>
                                </div>
                                <div className='language-bar-track'>
                                    <div className='language-bar-fill blue' style={{ width: '35%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='achievements-card'>
                    <h2 className='section-title'>Achievements</h2>

                    <div className='achievement-item'>
                        <div className='achievement-badge'>🔥</div>
                        <div className='achievement-info'>
                            <div className='achievement-title'>Wildfire</div>
                            <div className='achievement-desc'>Reach a 14-day learning streak (12 / 14)</div>
                            <div className='achievement-progress-track'>
                                <div className='achievement-progress-fill' style={{ width: '85%' }}></div>
                            </div>
                        </div>
                    </div>

                    <div className='achievement-item'>
                        <div className='achievement-badge'>🧠</div>
                        <div className='achievement-info'>
                            <div className='achievement-title'>Polyglot</div>
                            <div className='achievement-desc'>Practice 3 different languages (3 / 3)</div>
                            <div className='achievement-progress-track'>
                                <div className='achievement-progress-fill' style={{ width: '100%' }}></div>
                            </div>
                        </div>
                    </div>

                    <div className='achievement-item'>
                        <div className='achievement-badge'>⭐</div>
                        <div className='achievement-info'>
                            <div className='achievement-title'>XP Master</div>
                            <div className='achievement-desc'>Earn 2,000 total XP (1,450 / 2,000)</div>
                            <div className='achievement-progress-track'>
                                <div className='achievement-progress-fill' style={{ width: '72%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;