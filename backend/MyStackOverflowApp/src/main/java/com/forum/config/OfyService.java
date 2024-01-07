package com.forum.config;

import com.forum.entity.ForumPosts;
import com.googlecode.objectify.ObjectifyService;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

public class OfyService implements ServletContextListener {
    public void contextInitialized(ServletContextEvent sce) {
        // Auto-generated method stub
        ObjectifyService.init();
        ObjectifyService.register(ForumPosts.class);
    }

    public void contextDestroyed(ServletContextEvent sce) {
        // Auto-generated method stub
    }
}
