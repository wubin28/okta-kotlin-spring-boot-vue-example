package com.okta.springbootvue

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id

@Entity
class Todo(var title: String, var completed: Boolean) {
    @Id
    @GeneratedValue
    var id: Long? = null
    override fun toString() : String {
        return "Title='$title', Completed=$completed";
    }
}