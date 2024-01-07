package com.forum.entity;


import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
public class ForumPosts {
    @Id private Long id;

    String personName;
    int votes;
    String question;
}
