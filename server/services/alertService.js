const Activity = require('../models/UserActivity');

const generateCareAlerts = async (userId) => {
  const recentActivity = await Activity.find({ userId }).sort({ timestamp: -1 }).limit(50);
  let alerts = [];

  // Logic: Scan chat content for trauma/depression keywords
  const stressWords = ['trauma', 'pain', 'hopeless', 'depressed', 'tired'];
  const stressCount = recentActivity.filter(a => 
    a.type === 'chat' && stressWords.some(word => a.content.toLowerCase().includes(word))
  ).length;

  if (stressCount > 3) {
    alerts.push({
      type: 'Emotional Insight',
      message: 'We noticed some heavy themes in your recent chats. Would you like to try a grounding exercise?',
      actionLink: '/resources/grounding-exercises',
      priority: 'High'
    });
  }

  // Logic: Resource Pov - Check if they haven't viewed wellness resources lately
  const resourceCount = recentActivity.filter(a => a.type === 'resource_view').length;
  if (resourceCount === 0) {
    alerts.push({
      type: 'Recovery Step',
      message: 'It looks like you haven\'t explored our guides recently. Self-education is a key step in recovery.',
      actionLink: '/resources',
      priority: 'Medium'
    });
  }

  return alerts;
};