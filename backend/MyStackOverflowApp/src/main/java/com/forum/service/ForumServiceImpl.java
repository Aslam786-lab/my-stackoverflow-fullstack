package com.forum.service;

import static com.googlecode.objectify.ObjectifyService.ofy;
import com.forum.entity.ForumPosts;
import lombok.extern.java.Log;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Log
@Service
public class ForumServiceImpl implements ForumService{
    @Override
    public List<ForumPosts> getForumPosts() {
        log.warning("inside getForumPosts service");
        List<ForumPosts> forumPostsList = null;
        try {
            forumPostsList = ofy().load().type(ForumPosts.class).list();
            log.warning("forumPostsList"+forumPostsList);
        } catch (Exception e) {
            log.severe(e.getMessage());
        }
        return forumPostsList;
    }

    @Override
    public ForumPosts save(ForumPosts fP) {
        try {
            log.warning("inside save method "+ fP.toString());
            ofy().save().entity(fP).now();
            log.warning("stored successfully");
        } catch (Exception e) {
            log.severe(e.getMessage() + "at line number " + Arrays.toString(e.getStackTrace()));
        }
        return fP;
    }
}
