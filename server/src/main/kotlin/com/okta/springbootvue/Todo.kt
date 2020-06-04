package com.okta.springbootvue

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id

@Entity
class Todo(val title: String, val completed: Boolean) {
    @Id
    @GeneratedValue
    val id: Long? = null
    override fun toString() : String {
        return "Title='$title', Completed=$completed";
    }
}