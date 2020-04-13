/*
 * @lc app=leetcode.cn id=355 lang=javascript
 *
 * [355] 设计推特
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var Twitter = function() {
  this.articleList = []
  this.followList = new Map()
};

/**
 * Compose a new tweet. 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
  this.articleList.push({
    userId,
    tweetId,
  })
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
  const follows = this.followList.get(userId) || new Set()
  const result = []
  const l = this.articleList.length
  for (let i = l - 1; i >= 0 && result.length < 10; i--) {
    const article = this.articleList[i]
    if (follows.has(article.userId) || article.userId === userId) {
      result.push(article.tweetId)
    }
  }

  return result
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
  const followsSet = this.followList.get(followerId)
  if (!followsSet) {
    this.followList.set(followerId, new Set([followeeId]))
  } else {
    followsSet.add(followeeId)
  }
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
  const followsSet = this.followList.get(followerId)
  if (followsSet) {
    followsSet.delete(followeeId)
  }
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
// @lc code=end

